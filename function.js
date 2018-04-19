// Return keyword
function capitalize(str) {
    if(typeof str === 'number') {
        return 'That is not a string'
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

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