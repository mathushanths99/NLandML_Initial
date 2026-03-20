const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname);
const pagesDir = path.join(srcDir, 'pages');
const dataMiningDir = path.join(pagesDir, 'DataMining');
const neuralNetsDir = path.join(pagesDir, 'NeuralNetworks');

// Create directories
if (!fs.existsSync(dataMiningDir)) fs.mkdirSync(dataMiningDir, { recursive: true });
if (!fs.existsSync(neuralNetsDir)) fs.mkdirSync(neuralNetsDir, { recursive: true });

// Move files
const moves = [
  { from: path.join(pagesDir, 'nl_ml', 'home.jsx'), to: path.join(neuralNetsDir, 'Home.jsx') },
  { from: path.join(srcDir, 'NeuroLearnAcademy.jsx'), to: path.join(dataMiningDir, 'NeuroLearnAcademy.jsx') },
  { from: path.join(srcDir, 'NeuroLearnAcademy.css'), to: path.join(dataMiningDir, 'NeuroLearnAcademy.css') }
];

// Add all *Page.jsx files
const pagesFiles = fs.readdirSync(pagesDir);
for (const file of pagesFiles) {
  if (file.endsWith('Page.jsx')) {
    moves.push({
      from: path.join(pagesDir, file),
      to: path.join(dataMiningDir, file)
    });
  }
}

moves.forEach(({from, to}) => {
  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log(`Moved ${from} to ${to}`);
  } else {
    console.log(`Not found: ${from}`);
  }
});

console.log("Done");
