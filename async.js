//https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback

setTimeout(() => {
    console.log('After 2s')
}, 2000);

console.log("End before After 2s");

let a = 10;
a++;

console.log(a);