function add() {
    var x = 10;
    console.log(x)
}

add()

// Another one

var hi = 'hello world'

function doSt() {
    var hi = 'bye bye'
    console.log(hi)
}

doSt()
console.log(hi)

// Practice problems

var num = 8; // Step (1)

function doMath() {
    num += 1;  // Step (3) -> 9 + 1 = 10 

    if (num % 5 === 0) { return true} // 
    return false
}

num += 1; // step (2) -> we got 8 + 1 = 9 
console.log(doMath())