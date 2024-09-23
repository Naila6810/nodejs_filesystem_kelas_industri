const fs = require('node:fs');
fs.writeFile(
  'Biodata.txt',
  'Hello nama saya Naila, saya kelas XI TJKT 2 , Alamat rumah saya di Griya husada asri Blok B5 No 8 , Umur saya 16',
  function (error) {
    if (error) {
      console.error('terjadi eror', error);
    } else {
      console.log('File berhasil dibuat');
    }
  }
);
