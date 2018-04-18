let square = (a, b, h) => (a + b) * h / 2;

console.log('Square is ' + square(2,3, 5));

let add = (a, b, cb) => {
    setTimeout( () => {
        let error, results;
        if(typeof a != 'number' || typeof b !== 'number') {
            error = 'Must be a number';
            return cb(error, results)
        }
        results = a + b;
        cb(error, results);
    }, 1000);
}

add(5, 3, (err, result) => {
    if(err) return console.log('Error: '+ err);
    console.log('Result: ' + result);
});


// Or 
let add = (a, b, cb) => {
    setTimeout( () => {
        if ( typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Parameter must be a number'));
        }
        cb(undefined, a + b);
    }, 1000);
}

add(5, 3, (err, result) => {
    if(err) return console.log('Error: '+ err);
    console.log('Result: ' + result);
});
