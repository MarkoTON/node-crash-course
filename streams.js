const fs = require('fs');
console.log(fs);

// encoding: utf8 - i onda 'chunk' odmah pise u text umesto u <bufer...>
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', chunk => {
  console.log('---- NEW CHUNK ----');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
