const fs = require('node:fs');
fs.readFile('Biodata.txt', 'utf8', 
    
function (eror, data) {
  if (eror) {
    console.eror(eror);
  } else {
    console.log('isi filenya :', data);
  }
});
