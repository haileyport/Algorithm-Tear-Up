const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let multiply = parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2])
let multiplyArr = String(multiply).split('');

//console.log(multiplyArr);
//['1', '7', '0', '3', '7', '3', '0', '0']

for (let i = 0; i <= 9 ; i++) {
    let count = 0;
    for (let j = 0; j < multiplyArr.length; j++) {
        if (parseInt(multiplyArr[j]) === i) {
            count++;
        }
    }
    console.log(count);
}
