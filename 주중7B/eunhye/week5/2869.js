//달팽이는 올라가고 싶다
//40분

//높이 V
//up A down B
console.time("code_measure");

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split(" ").map(Number);

const A = input[0];
const B = input[1];
const V = input[2];
//하루에 올라가는 양 A-B
//아침에 완료하니까 V에서 밤에 내려가는 B를 빼버림

//하루 단위니까 올림

console.log(Math.ceil((V - B) / (A - B)));

console.timeEnd("code_measure");
