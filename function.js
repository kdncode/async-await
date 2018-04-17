// let getFunc = (num) => {
//     if ( num >= 0 ) {
//         return () => { console.log('Positive')}
//     } else {
//         return () => { console.log('Negative')}
//     }
// }

// getFunc(3)();

// Or 
// let getFunc = (num) => {
//     if ( num >= 0 ) return () => console.log('Positive');
//     return () => console.log('Negative');
// }

// getFunc(-3)();

// Need () after getFunc to invoke the function 
//otherwise it just returns the func