//https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
let fs = require('fs');
// Async 

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) return console.log('Error: ' + error);
    console.log('My data from test.txt: ',data);
});
console.log('End');


================//
// Sync

let data = fs.readFileSync('./test.txt', 'utf8');
console.log(data);

console.log('End');
