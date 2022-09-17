const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const [num1, num2 ] = input.split(' ');
const reversnum1  =num1.split('').reverse().join('')
const reversnum2  =num2.split('').reverse().join('')
console.log(reversnum1 < reversnum2 ? reversnum2 : reversnum1)