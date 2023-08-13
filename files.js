const fs = require('fs');

// console.log(fs);

// reading files // Ucitava pa kada zavrsi sa ucitavanjem ona se opali ova druga funkcija
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

console.log('last line');

// writing files // ako nema file onda ce ga on kreirati // ako je bio neki text pre ovog, on ce ga pregaziti
fs.writeFile('./docs/blog23.txt', 'hello, world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});

// directories // existsSync je sinhrona metoda i blokirace code. Tako da dok se to ne zavrsi ne ide se dalje.
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files // existsSync je sinhrona metoda i blokirace code. Tako da dok se to ne zavrsi ne ide se dalje.
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}