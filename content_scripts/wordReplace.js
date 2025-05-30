word = prompt("Enter a string to replace all words with.");

document.querySelectorAll('*:not(script):not(style)').forEach(el => el.childNodes.forEach(node => {
    if (node.nodeType === 3) {
        node.nodeValue = node.nodeValue.replace(/\b\w+\b/g, word);    }}));