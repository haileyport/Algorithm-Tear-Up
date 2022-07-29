const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let maxNum = Math.max(...input);
/* 
for (let el of input) {
    if (parseInt(el) === maxNum) {
        
    }
}
 */
console.log(maxNum);
//indexOf 메서드로 다시 해보자
for (let i = 0; i < input.length; i++) {
    if (parseInt(input[i]) === maxNum) {
        console.log(i + 1);
    }
}