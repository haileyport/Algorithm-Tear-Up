const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let nx = input[0].split(' ');
let n = parseInt(nx[0]);
let x = parseInt(nx[1]);

let sequenceA = input[1].split(' ');
let result = '';
for (let i = 0; i <= n; i++) {
    if (parseInt(sequenceA[i]) < x) {
        result = result + sequenceA[i] + ' ';
    }
}
console.log(result);

/* 
sequenceA[i]와 x를 비교하고 x보다 sequenceA[i]가 더 작으면 result에 저장
 */