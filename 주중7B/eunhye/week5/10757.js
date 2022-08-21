//큰 수 A+B

console.time("code_measure");

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
console.log((A + B).toString());
//BigInt는 맨 끝에 n이 달려 나오기 때문에 string으로 반환해줘야 함!
console.timeEnd("code_measure");
