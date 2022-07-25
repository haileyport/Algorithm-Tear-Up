// memory : 9588KB
// time : 116ms


let fs = require('fs');
let input = parseInt(fs.readFileSync('input.txt').toString().split(' '));



function factorial(n){
    if(n <= 1){
        return 1;
    }
    return n * factorial(n-1);
}


// for (let i = input; i > 0; i--){
//     res = res * i;
// }

// console.log(factorial(input));
console.log(factorial(input))