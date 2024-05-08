const path = require("path");
var PSD = require("psd");
const psdFile = path.join(__dirname, "../demo.psd");
var psd = PSD.fromFile(psdFile);
psd.parse();
const fs = require("fs");

fs.writeFileSync(path.join(__dirname, "../output/psd.json"), JSON.stringify(psd.tree().export(), null, "\t"));
console.log("write to psd.json done!");
// console.log(psd.tree().childrenAtPath('A/B/C')?.[0]?.export());

// You can also use promises syntax for opening and parsing
PSD.open(psdFile)
  .then(function(psd) {
    return psd.image.saveAsPng(path.join(__dirname, "../output/output.png"));
  })
  .then(function() {
    console.log("Finished!");
  });
