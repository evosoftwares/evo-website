import re

def parse_css_file(input_path, output_path):
    with open(input_path, 'r') as f:
        content = f.read()

    # Remove comments to avoid parsing issues inside them
    # But be careful not to remove strings
    # For this task, assuming standard comments is fine.
    # We will skip comment removal to avoid messing up if not needed,
    # but strictly parsing braces inside comments is bad.
    # Let's do a simple pass.

    new_content = ""
    i = 0
    n = len(content)

    while i < n:
        # Check for comment
        if content[i:i+2] == '/*':
            end = content.find('*/', i + 2)
            if end == -1:
                new_content += content[i:]
                break
            new_content += content[i:end+2]
            i = end + 2
            continue

        if content[i:i+6] == '@media':
            # Found media query
            # Find the condition part until '{'
            j = content.find('{', i)
            if j == -1:
                new_content += content[i:]
                break

            condition = content[i:j] # e.g. "@media (min-width: 768px) "

            is_min = 'min-width' in condition
            is_max = 'max-width' in condition

            # Find matching closing brace
            depth = 1
            k = j + 1
            while k < n and depth > 0:
                if content[k] == '{':
                    depth += 1
                elif content[k] == '}':
                    depth -= 1
                k += 1

            # content[j+1 : k-1] is the body of the media query
            body = content[j+1 : k-1]

            if is_min:
                # Skip desktop styles (remove block entirely)
                pass
            elif is_max:
                # Unwrap mobile styles (apply always)
                new_content += body
            else:
                # Keep other media queries as is (e.g. print)
                new_content += content[i:k]

            i = k
        else:
            new_content += content[i]
            i += 1

    with open(output_path, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    parse_css_file('styles.css', 'mobile.css')
