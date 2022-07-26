let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = [];
for(j=97;j<=122;j++){
    arr.push(input.indexOf(String.fromCharCode(j)))
}
console.log(arr.join(' '));