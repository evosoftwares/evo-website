import json
import os
import re

# Configuration
DATA_FILE = 'blog-data.json'
TEMPLATE_FILE = 'blog-detalhes.html'
OUTPUT_DIR = 'blog'

def load_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def save_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def replace_inner_text_by_id(html, element_id, new_text):
    # Regex to find id="element_id"[^>]*>(.*?)</tag>
    # Try generic tag matching
    pattern = re.compile(f'(id="{element_id}"[^>]*>)(.*?)(</)', re.DOTALL)
    if not pattern.search(html):
        print(f"Warning: ID {element_id} not found.")
        return html
    return pattern.sub(f'\\g<1>{new_text}\\g<3>', html)

def replace_attribute_by_id(html, element_id, attribute, new_value):
    # Find tag with id
    # Then find attribute inside that tag definition
    pattern = re.compile(f'(<{dict_tag_lookup(element_id)}[^>]*id="{element_id}"[^>]*{attribute}=")([^"]*)(")', re.DOTALL)
    # Simplify: Look for id="element_id" then look for attribute backwards or forwards in the same tag. 
    # Hard to do robustly with regex without knowing tag boundaries.
    # Alternative: Use simple replacing of known strings if unique enough.
    # Given the file structure, replace `id="element_id" ... attribute="value"`
    
    # We'll use a specific approach for known IDs in this file.
    # <img id="heroImage" src="...">
    if element_id == 'heroImage' and attribute == 'src':
        return re.sub(r'(<img[^>]*id="heroImage"[^>]*src=")([^"]*)(")', f'\\g<1>{new_value}\\g<3>', html)
    if element_id == 'authorImage' and attribute == 'src':
         return re.sub(r'(<img[^>]*id="authorImage"[^>]*src=")([^"]*)(")', f'\\g<1>{new_value}\\g<3>', html)
    if element_id == 'pageCanonical' and attribute == 'href':
        return re.sub(r'(<link[^>]*id="pageCanonical"[^>]*href=")([^"]*)(")', f'\\g<1>{new_value}\\g<3>', html)
    
    # Meta tags
    if element_id.startswith('pageOg') or element_id.startswith('pageTwitter') or element_id == 'pageDescription':
        return re.sub(f'(<meta[^>]*id="{element_id}"[^>]*content=")([^"]*)(")', f'\\g<1>{new_value}\\g<3>', html)
        
    return html

def dict_tag_lookup(element_id):
    # Helper to guess tag type if needed, but for now we rely on specific regexes
    return "[a-zA-Z0-9]+"

def fix_relative_paths(html):
    # Fix CSS, JS, Image links to be relative to /blog/
    # Add ../ to known relative paths
    
    replacements = [
        ('href="styles.css"', 'href="../styles.css"'),
        ('href="favicon.svg"', 'href="../favicon.svg"'),
        ('href="favicon.ico"', 'href="../favicon.ico"'),
        ('href="index.html', 'href="../index.html'),
        ('href="about.html"', 'href="../about.html"'),
        ('href="portfolio.html"', 'href="../portfolio.html"'),
        ('href="materiais.html"', 'href="../materiais.html"'),
        ('href="suporte.html"', 'href="../suporte.html"'),
        ('href="lgpd.html"', 'href="../lgpd.html"'),
        ('href="registro-marca.html"', 'href="../registro-marca.html"'),
        ('href="privacy.html"', 'href="../privacy.html"'),
        ('href="termos.html"', 'href="../termos.html"'),
        ('href="ajuda.html"', 'href="../ajuda.html"'),
        ('src="image05 1.svg"', 'src="../image05 1.svg"'),
        ('src="script.js"', 'src="../script.js"'),
        ('src="/manifest.json"', 'src="../manifest.json"'), # usually absolute / but if relative...
        ('href="/manifest.json"', 'href="../manifest.json"'),
        ('href="/icon-apple-touch.png"', 'href="../icon-apple-touch.png"'),
        # Fix navbar anchor links which might break? index.html#home -> ../index.html#home is handled above
    ]
    
    for old, new in replacements:
        html = html.replace(old, new)
        
    return html

def main():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    articles = json.loads(load_file(DATA_FILE))
    template = load_file(TEMPLATE_FILE)
    
    slug_map = {article['id']: article['slug'] for article in articles}
    
    for article in articles:
        print(f"Generating {article['slug']}...")
        current_html = template
        
        # 1. Content Replacements
        current_html = replace_inner_text_by_id(current_html, 'pageTitle', f"{article['title']} - Evo")
        current_html = replace_inner_text_by_id(current_html, 'categoryBadge', article['category'].capitalize())
        current_html = replace_inner_text_by_id(current_html, 'articleTitle', article['title'])
        current_html = replace_inner_text_by_id(current_html, 'publishDate', article['date'])
        current_html = replace_inner_text_by_id(current_html, 'readTime', article['readTime'])
        
        # Article Content - Special handling for internal HTML
        # We replace the INNER CONTENT of <div id="articleContent">...</div>
        # Regex search for the div
        # Using a marker since regex for nested divs is hard. 
        # But looking at template, it's <div id="articleContent" class="article-body">...</div>
        # We can assume the structure in template is consistent.
        # Let's use string split/join for safety if possible?
        # unique string: <div id="articleContent" class="article-body">
        start_marker = '<div id="articleContent" class="article-body">'
        if start_marker in current_html:
            pre, post = current_html.split(start_marker, 1)
            # Find the closing div. This is risky if content has divs.
            # But the TEMPLATE content is just placeholder.
            # Let's inspect template content again... it has <p>...</p> inside.
            # The closing div is the next </div> corresponding to the opening one.
            # Since we can't parse easily, let's look for specific closing comment or structure from file view.
            # view_file showed:
            # 261:                 </div>
            # 262: 
            # 263:                 <!-- Article Footer with Share -->
            end_marker = '<!-- Article Footer with Share -->'
            
            # extract content between start_marker and end_marker, hoping the closing div is just before end_marker
            content_part_search = post.split(end_marker)[0]
            # find last </div> in that part
            last_div_index = content_part_search.rfind('</div>')
            
            new_inner_html = f'{start_marker}\n{article["content"]}\n'
            
            # Reconstruction
            pre_part = pre
            post_part = post[last_div_index + 6:] # +6 for </div>
            
            # Wait, this logic replaces the closing div? No, I want to keep closing div.
            # post includes the rest of the file starting after start_marker.
            # content_part_search is the text INSIDE.
            # last_div_index is the position of </div> relative to start of post.
            
            # Correct logic:
            # part_after_opening = post
            # we need to find the closing div of this exact element.
            # Since in template it ends at line 261 and next line is comment.
            # Use regex to match until the known footer comment?
            # Or just replace the known content string from JSON if we knew it? No.
            
            # Robust enough for this specific template:
            # Match everything between <div id="articleContent"...> AND <div class="article-footer">
            # The structure is:
            # <div id="articleContent"...> ... </div>
            # <!-- Article Footer with Share -->
            # <div class="article-footer">
            
            current_html = re.sub(
                r'(<div id="articleContent"[^>]*>)(.*?)(</div>\s*<!-- Article Footer)',
                f'\\1{article["content"]}\\3',
                current_html,
                flags=re.DOTALL
            )
        
        # 2. Attribute Replacements
        current_html = replace_attribute_by_id(current_html, 'heroImage', 'src', article['image'])
        
        # Meta Tags
        article_url = f"https://www.evo.com.br/blog/{article['slug']}.html"
        current_html = replace_attribute_by_id(current_html, 'pageCanonical', 'href', article_url)
        current_html = replace_attribute_by_id(current_html, 'pageOgUrl', 'content', article_url)
        current_html = replace_attribute_by_id(current_html, 'pageTwitterUrl', 'content', article_url)
        
        current_html = replace_attribute_by_id(current_html, 'pageDescription', 'content', article['excerpt'])
        current_html = replace_attribute_by_id(current_html, 'pageOgDescription', 'content', article['excerpt'])
        current_html = replace_attribute_by_id(current_html, 'pageTwitterDescription', 'content', article['excerpt'])
        
        current_html = replace_attribute_by_id(current_html, 'pageOgTitle', 'content', article['title'])
        current_html = replace_attribute_by_id(current_html, 'pageTwitterTitle', 'content', article['title'])
        
        current_html = replace_attribute_by_id(current_html, 'pageOgImage', 'content', article['image'])
        current_html = replace_attribute_by_id(current_html, 'pageTwitterImage', 'content', article['image'])
        
        # 3. Tags
        tags_html = '\n'.join([f'<span class="tag">{tag}</span>' for tag in article['tags']])
        # Find tags container
        # <div class="article-tags"> ... </div>
        current_html = re.sub(
            r'(<div class="article-tags">)(.*?)(</div>)',
            f'\\1{tags_html}\\3',
            current_html,
            flags=re.DOTALL
        )
        
        # 4. Author Injection (Since logic is missing in template)
        # Inject before publishDate
        author_html = f'''
        <div class="article-author-injected" style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <img src="{article['author']['image']}" alt="{article['author']['name']}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
            <span style="font-weight: 500; font-size: 0.95rem; color: var(--text-primary);">{article['author']['name']}</span>
        </div>
        '''
        current_html = current_html.replace('<span id="publishDate"', f'{author_html}<span id="publishDate"')
        
        # 5. Internal Links (Related Articles)
        # Replace navigateToArticle(id)
        for art_id, slug in slug_map.items():
            link_pattern = f"navigateToArticle\\({art_id}\\)"
            # Check if this article is the current one? If so, maybe disable click or link to self?
            # Linking to self is harmless.
            current_html = current_html.replace(link_pattern, f"window.location.href='{slug}.html'")
            
        # 6. JSON-LD
        schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article['title'],
            "description": article['excerpt'],
            "url": article_url,
            "image": article['image'],
            "datePublished": article['date'], # Needs formatting? Keeping as string for now if schema accepts free text or needs ISO. 
            # Ideally convert "15 de outubro, 2024" to ISO.
            "author": {
                "@type": "Person",
                "name": article['author']['name']
            },
            "publisher": {
                "@type": "Organization",
                "name": "Evo",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.evo.com.br/logo.png" 
                }
            }
        }
        json_ld_str = json.dumps(schema, indent=4, ensure_ascii=False)
        current_html = re.sub(
            r'(<script type="application/ld\+json" id="articleSchema">)(.*?)(</script>)',
            f'\\1\n{json_ld_str}\n\\3',
            current_html,
            flags=re.DOTALL
        )
        
        # 7. Remove blog-detalhes.js
        current_html = current_html.replace('<script src="blog-detalhes.js" defer></script>', '')
        

        
        # 8. Fix Relative Paths
        current_html = fix_relative_paths(current_html)
        
        # Save
        filename = f"{article['slug']}.html"
        save_file(os.path.join(OUTPUT_DIR, filename), current_html)

    # Update index page
    update_materiais_index(articles)
    
    # Update sitemap
    update_sitemap(articles)

    print(f"Generated {len(articles)} articles in {OUTPUT_DIR}/")

def update_sitemap(articles):
    print("Updating sitemap.xml...")
    sitemap_path = 'sitemap.xml'
    if not os.path.exists(sitemap_path):
        print("Warning: sitemap.xml not found.")
        return

    xml_content = load_file(sitemap_path)
    
    # Prepare new entries
    new_entries = "\n    <!-- Blog Articles (Auto-generated) -->"
    base_url = "https://www.evo.com.br/blog/"
    today = "2025-11-28" # Ideally use dynamic date, but sticking to existing format or date.today()
    # Let's use current date for lastmod or the article date if parsable. 
    # For now, let's use a fixed decent date or today's date if we imported date.
    import datetime
    today_str = datetime.date.today().isoformat()
    
    for article in articles:
        slug = article['slug']
        loc = f"{base_url}{slug}.html"
        
        entry = f"""
    <url>
        <loc>{loc}</loc>
        <lastmod>{today_str}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>"""
        new_entries += entry

    # Remove existing auto-generated block if present
    # We look for the start comment and end of the block (which is tricky without an end comment).
    # Strategy: Remove all <url> entries that contain /blog/ and are NOT blog-detalhes.html (legacy)
    # OR, better: Use a specific comment block wrapper.
    
    # Simple regex to remove previously generated blog entries if we identify them by /blog/ path
    # But wait, manually added ones might exist.
    # Safe bet: Append them if they don't exist?
    # Or replace the whole "Blog Articles" section?
    
    # Let's try to remove old dynamic blog entries first using regex
    # Matches <url>...<loc>.../blog/...</loc>...</url>
    # Be careful not to verify too strictly.
    
    # Actually, simpler approach for stability: 
    # Just remove the specific auto-gen block if we add a marker.
    # Since we didn't have a marker before, we can't delete old ones easily unless we parse.
    # Let's just append for this first run, and future runs can use the marker.
    
    block_start = "<!-- Blog Articles (Auto-generated) -->"
    
    if block_start in xml_content:
        # Remove everything from block_start to the next empty line or end of urls?
        # It's safer to just regex replace the entire block if we can bound it.
        # Let's assume we append at the end, so we can replace from marker to </urlset>
        pattern = re.compile(r'(\s*<!-- Blog Articles \(Auto-generated\) -->.*)(</urlset>)', re.DOTALL)
        xml_content = pattern.sub(r'\2', xml_content)
    
    # Now append before </urlset>
    xml_content = xml_content.replace('</urlset>', f'{new_entries}\n</urlset>')
    
    save_file(sitemap_path, xml_content)
    print("Updated sitemap.xml successfully.")

def update_materiais_index(articles):
    print("Updating materiais.html index...")
    materiais_path = 'materiais.html'
    if not os.path.exists(materiais_path):
        print("Warning: materiais.html not found.")
        return

    html = load_file(materiais_path)
    
    # Generate HTML cards
    cards_html = ""
    for index, article in enumerate(articles):
        # Determine visibility (show first 6)
        is_hidden = index >= 6
        hidden_class = " hidden" if is_hidden else ""
        hidden_style = ' style="display: none;"' if is_hidden else ""
        
        link = f"blog/{article['slug']}.html"
        excerpt = article.get('excerpt', article.get('description', ''))
        
        # Determine category for data attribute
        category = article.get('category', 'Geral')
        
        card = f'''
                <!-- Article {article['id']}: {article['title']} -->
                <a href="{link}" class="article-card{hidden_class}" data-category="{category.lower()}"{hidden_style} style="text-decoration: none; color: inherit; display: block;">
                    <div class="article-image">
                        <img src="{article['image']}" alt="{article['title']}" width="400" height="300" loading="lazy">
                        <div class="article-overlay">
                            <span class="article-category">{category.capitalize()}</span>
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-title">{article['title']}</h3>
                        <p class="article-description">{excerpt}</p>
                        <div class="article-meta">
                            <span class="meta-author">Por {article['author']['name']}</span>
                            <span class="meta-date">{article['date']}</span>
                            <span class="meta-read">{article['readTime']}</span>
                        </div>
                    </div>
                </a>'''
        cards_html += card

    # Regex to find the grid container content
    # Look for the opening tag with id="articlesGrid"
    # And the closing div that precedes the load-more-container
    pattern = re.compile(r'(<div class="articles-grid" id="articlesGrid">)(.*?)(</div>\s*<div class="load-more-container">)', re.DOTALL)
    
    if pattern.search(html):
        # We replace group 2 (content) with new cards
        html = pattern.sub(f'\\1\n{cards_html}\n\\3', html)
        save_file(materiais_path, html)
        print("Updated materiais.html successfully.")
    else:
        print("Error: Could not find #articlesGrid in materiais.html")

if __name__ == "__main__":
    main()
