// Return keyword

// Function declaration
function capitalize(str) {
    if(typeof str === 'number') {
        return 'That is not a string'
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// Function expression
var capitalize = function(str) {
    if(typeof str === 'number') {
        return 'That is not a string'
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Call the func
var hi = 'hello word'
var newHi = capitalize(hi)

var num = 22
var newNum = capitalize(num);

console.log(newHi)
console.log(newNum)


let getFunc = (num) => {
    if ( num >= 0 ) {
        return () => { console.log('Positive')}
    } else {
        return () => { console.log('Negative')}
    }
}

getFunc(3)();

// Or 
let getFunc = (num) => {
    if ( num >= 0 ) return () => console.log('Positive');
    return () => console.log('Negative');
}

getFunc(-3)();

//Need () after getFunc to invoke the function 
//otherwise it just returns the func

// Practice Problem

// Write a function isEven() which takes a single numeric argument 
// and returns true if the number is even, and false otherwise.
function isEven(myNumber) {
    if( myNumber % 2 === 0) {
        return true;
    }
    return false;
}

isEven(4)

// Or use this
function isEven(myNumber) {
    return myNumber % 2 === 0;
}

// Factorial() .... Ex: 3! = 3 * 2 * 1
// Write a function factorial() which takes a single numeric argument
// and returns the factorial of that  number

function factorial(num) {
    
    // Define a result var
    var result = 1;

    // Calculate factorial & store in result
    for( var i = 2; i <= num; i++ ){
        result *= i
    }
    return result;
}

factorial(3)

// kebabToSnake().... Ex: replace hello-world to hello_world
// Write a func kebabToSnake() which take a single kebab-cased string
// arugment and returns the snake_cased ver.

function kebabToSnake(str) {

    // Replace all '-' with '_'
    var newStr = str.replace(/-/g, '_');
    return newStr;
}

kebabToSnake('Hello-World')