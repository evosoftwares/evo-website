const fs = require('fs');
const path = require('path');

const sourcePath = path.join('/Users/gabrielggcx/evo-website', 'blog-detalhes.js');
let content = fs.readFileSync(sourcePath, 'utf8');

// Extract the object
const startMarker = 'const articlesDatabase = {';
const nextSection = '// LOAD ARTICLE ON PAGE LOAD';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(nextSection);

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find articlesDatabase boundaries');
    process.exit(1);
}

let dbString = content.substring(startIndex, endIndex);
// Remove variable declaration to get just the object literal
dbString = dbString.replace('const articlesDatabase = ', '').trim();

// Clean up the end: we expect it to end with "};" or similar before the comments. 
// We'll search for the last closing brace.
const lastBrace = dbString.lastIndexOf('}');
if (lastBrace !== -1) {
    dbString = dbString.substring(0, lastBrace + 1);
}

let articlesDatabase;
try {
    articlesDatabase = eval('(' + dbString + ')');
} catch (e) {
    console.error('Error parsing data:', e);
    process.exit(1);
}

const articles = Object.values(articlesDatabase).map(article => {
    const slug = article.title
        .toLowerCase()
        .normalize('NFD') // separate accents
        .replace(/[\u0300-\u036f]/g, '') // remove accents
        .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
        .replace(/^-+|-+$/g, ''); // remove leading/trailing dashes

    return { ...article, slug };
});

fs.writeFileSync('blog-data.json', JSON.stringify(articles, null, 2));
console.log(`Success: Extracted ${articles.length} articles to blog-data.json`);
