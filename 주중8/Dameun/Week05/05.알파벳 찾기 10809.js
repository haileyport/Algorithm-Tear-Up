let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim();

let arr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97))

for(let n = 0; n<arr.length; n++){
    arr[n] = input.indexOf(arr[n]) 
};

console.log(arr.join(' '));

//9348
//160ms