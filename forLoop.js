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