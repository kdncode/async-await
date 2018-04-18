//Var & Let

var a = 5;
console.log(a)

let b = 10;
console.log(b)

// =============== //

//Scope 

if(true) {
    var c = 15;
}

console.log('c = ', c)


if(true) {
    let c = 15;
    console.log('Inside scope', c)
}

console.log('c = ', c)

//=============== //

//Arrow 
let arr = [3, 4, 1, 0, 5];

arr.forEach(function(e) {
    console.log(e);
    
});
console.log("=======");

// Or
arr.forEach( (e) => {
    console.log(e);
});

console.log("=======");

//Or If there is only ONE parameter - Then you can omit ( )
arr.forEach( e => {
    console.log(e);
});

console.log("=======");

//Or there is only ONE 
arr.forEach( e => console.log(e));
console.log("=======");

=============== //
//Create an array from a given array
let array = [4, 5, 7,2, 6];

// array.forEach(e => console.log(e));

array2 = array.map(function(e) {
    return e * 2;
})

// Or this... Because => replaces 'return'
array2 = array.map(e =>  e * 2);

console.log(array2);

//=============== //
function add(a, b) {
    return a + b;
}

// Or use Arrow function
let add = (a, b) => {
    return a + b;
}

console.log(add(3, 2));

// Or this
let add = (a, b) => a + b;
console.log(add(1, 3));
