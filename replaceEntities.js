const fs = require('fs');
const path = require('path');

// Function to replace HTML entities in a file
function replaceHtmlEntities(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  fs.writeFileSync(filePath, content, 'utf-8');
}

// Recursively process all .md files in a directory
function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (path.extname(fullPath) === '.md') {
      replaceHtmlEntities(fullPath);
      console.log(`Processed: ${fullPath}`);
    }
  });
}

// Replace 'docs' with your Markdown output directory
processDirectory('docs');
