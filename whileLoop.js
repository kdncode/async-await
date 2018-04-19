//While
console.log('Print all nums btw -10 & 19')
var i = -10;
while(i <= 19) {
    console.log(i);
    i++;
}

console.log('Print all even nums btw 10 & 40')
var i = 10;
while(i <= 40) {
    console.log(i);
    i+=2;
}

console.log('Print all odd nums btw 300 & 333')
var i = 300; 
while(i <= 333) {
    if( i % 2 !== 0 ){
        console.log(i)
    }
    i++;
}

console.log('Print all nums divisible by 5 AND 3 btw 5 & 50')
var i = 5;
while(i <= 50) {
    if ( i % 5 == 0 & i % 3 == 0){
        console.log(i)
    }
    i++
}

// Real worl problem
var answer = prompt('Have you done your homework yet?')

while(answer.indexOf('yes') === -1 ) {
    var answer = prompt('Have you done your homework yet?');
}
alert('Woohoo! Can I borrow it?')

// Another one ^^
var str = "hello world"
var i = 0

while( i < str.length) {
    console.log(str[i])
    i++
}