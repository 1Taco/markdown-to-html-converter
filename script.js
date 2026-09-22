const textToConvert = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

function convertMarkdown() {
  const regexHeading = /^#+ /g;
  const regexBold = /(\*\*|__)(.+?)\1/g;
  const regexItalic = /([\*_])(.+?)\1/g;
  const regexImg = /!\[(.+?)\]\((.+?)\)/g;
  const regexLink = /(?<!!)\[(.+?)\]\((.+?)\)/g;
  const regexQuote = /^> /g;
  const newLineArr = textToConvert.value.split("\n");

  const convertedLines = newLineArr.map(line => {
    const matchHeading = line.match(regexHeading);
    const matchQuote = line.match(regexQuote);

    let converted = line;
    // convert bold
    converted = converted.replace(regexBold, `<strong>$2</strong>`);
    // convert italic
    converted = converted.replace(regexItalic, `<em>$2</em>`);
    // convert img
    converted = converted.replace(regexImg, `<img alt="$1" src="$2">`);
    //convert link url
    converted = converted.replace(regexLink, `<a href="$2">$1</a>`);
    // convert quote
    if(matchQuote) {
      const quoteLen = matchQuote[0].length-1;
      const text = converted.slice(quoteLen+1);
      converted = `<blockquote>${text}</blockquote>`;
    }
    // convert heading
    if(matchHeading) {
      const headingLen = matchHeading[0].length-1;
      if(headingLen < 7) {
        const text = converted.slice(headingLen+1);
        converted = `<h${headingLen}>${text}</h${headingLen}>`;
      }  
      return converted;
    }

    return converted;
  });

  return convertedLines.join("");
}

textToConvert.addEventListener("input", () => {
  htmlOutput.textContent = convertMarkdown();
  htmlPreview.innerHTML = htmlOutput.textContent;
});