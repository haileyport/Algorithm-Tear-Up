//단어의 개수

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split(" ");

//공백 문자열이 들어오는 경우 고려!
console.log(input[0] === "" ? 0 : input.length);
