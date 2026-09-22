# Markdown to HTML Converter

A lightweight, browser-based Markdown-to-HTML converter built with vanilla JavaScript. Type Markdown into the editor and see the generated HTML and a live preview update as you work.

> **Project note:** This project was created as practice for the freeCodeCamp JavaScript certification curriculum. It is **not a freeCodeCamp certificate** and does not represent an official certification.

## Features

- Live Markdown conversion as you type
- Live rendered HTML preview
- Generated HTML output for easy inspection or copying
- Supports common Markdown syntax:
  - Headings (`#` through `######`)
  - Bold text (`**bold**` or `__bold__`)
  - Italic text (`*italic*` or `_italic_`)
  - Links (`[link text](https://example.com)`)
  - Images (`![alt text](image-url)`)
  - Blockquotes (`> quote`)
- Built with plain HTML, CSS, and JavaScript
- No frameworks, libraries, or build tools required

## Demo

Open the project in a browser and enter Markdown in the input area. The converted HTML and rendered preview will update automatically whenever the input changes.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/1Taco/markdown-to-html-converter.git
cd markdown-to-html-converter
```

### Run locally

Open `index.html` in a modern web browser. No installation or build step is needed.

For a more reliable local development experience, serve the project with a simple local server, such as the VS Code Live Server extension or:

```bash
npx serve .
```

## Example Markdown

```markdown
# Welcome

This is **bold** and this is *italic*.

> Markdown is easy to read and write.

[Visit freeCodeCamp](https://www.freecodecamp.org/)
```

The application displays both the generated HTML and the rendered result in the preview area.

## Project Structure

```text
.
├── index.html    # Application markup
├── style.css     # Layout and visual styling
└── script.js     # Markdown conversion and live preview logic
```

## How It Works

1. The app reads the value from the Markdown input field.
2. The text is split into individual lines.
3. Regular expressions convert supported Markdown patterns into HTML elements.
4. The generated HTML is shown as text and rendered in the preview.
5. An `input` event listener repeats the process whenever the user types.

## Current Scope

This is a small learning project rather than a complete Markdown parser. It supports the syntax listed above, but it does not currently cover every feature in the full Markdown specification, such as lists, code blocks, tables, escaping, or nested Markdown structures.

Because the converter uses regular expressions and inserts generated markup into the preview, it should not be used as a security-hardened Markdown renderer for untrusted content.

## Learning Goals

This project helped practice:

- DOM selection and manipulation
- Event listeners and live updates
- String processing with regular expressions
- Mapping input data into transformed output
- Rendering text as HTML in the browser

## License

This project does not currently specify a license. Add a license file if you would like others to use, modify, and redistribute the code under defined terms.
