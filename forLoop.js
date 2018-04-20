var str = "hello world"

for( i = 0; i < str.length; i++) {
    console.log(str[i])
}

console.log('Print all even nums btw 10 & 40')
for(i=10; i <= 40; i++) {
    if (i % 2 === 0 ){
        console.log(i)
    }
}


console.log('Print all odd nums btw 300 & 333')
for(i = 300; i <= 333; i++ ) {
    if(i % 2 !==0 ) {
        console.log(i)
    }
}

console.log('Print all nums divisible by 5 AND 3 btw 5 & 50')
for( i = 5; i <= 50; i++ ) {
    if( i % 3 === 0 & i % 5 === 0 ) {
        console.log(i)
    }
}

// Print Reverse array
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i-- ) {
        console.log(arr[i])
    }
}

printReverse([2, 5, 1, 7, 3])


// CHeck uniForm
function isUniform(arr) {
    var first = arr[0];

    for(var i = 1; i < arr.length; i++ ) {
        if(arr[i] !== first ){
            return false
        } 
        
    }
    return true;
}

console.log(isUniform([3, 3, 4]))
console.log(isUniform([3, 3, 3]))

// Summary array
function sumArray(arr) {
    var total = 0;

    arr.forEach(function(element) {
        total += element;
    })
    return total;
}

console.log(sumArray([2, 3, 5]))


// Max num in array
function max(arr) {
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if ( arr[i] > max ) {
            max = arr[i];
        }
    }

    return max;
}

console.log(max([3, 6, 2]))