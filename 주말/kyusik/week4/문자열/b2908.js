const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
console.log(input);
const [a, b] = input.map((el) => {
    console.log(el);
    console.log([el].reverse())//.join(''));
    return [...el].reverse().join('');
});
//console.log(a, b, [a, b]);
console.log(Math.max(a, b));