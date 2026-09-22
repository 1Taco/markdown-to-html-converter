# Markdown to HTML Converter

A browser-based Markdown to HTML converter built with HTML, CSS, and JavaScript as part of the freeCodeCamp JavaScript curriculum.

The app converts supported Markdown syntax into HTML in real time and displays both the generated HTML and a live preview.

## Features

- Live Markdown conversion
- Live HTML preview
- Generated HTML output
- Headings from `#` to `######`
- Bold text using `**text**` or `__text__`
- Italic text using `*text*` or `_text_`
- Links
- Images
- Blockquotes

## Technologies

- HTML
- CSS
- JavaScript
- Regular Expressions

## Example

```markdown
# Welcome

This is **bold** and this is *italic*.

> This is a blockquote.

[Visit freeCodeCamp](https://www.freecodecamp.org/)

![Example image](https://example.com/image.jpg)
```

## How It Works

1. Reads the Markdown input from the textarea.
2. Splits the input into separate lines.
3. Uses regular expressions to identify supported Markdown syntax.
4. Converts the matched Markdown into HTML.
5. Displays the generated HTML and renders a live preview.
6. Updates automatically whenever the user types.

## What I Practiced

- DOM manipulation
- Event listeners
- Regular expressions
- String manipulation
- Array methods
- Dynamic HTML rendering
- Working with `textContent` and `innerHTML`

## About

This project was completed as part of my freeCodeCamp JavaScript learning.
