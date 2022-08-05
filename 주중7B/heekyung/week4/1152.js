const input = require("fs").readFileSync("/dev/stdin").toString().trim()

const word = input.split(' ');

console.log(word[0] === "" ? 0 :word.length)
// input에 0이 들어왔을 때 예외처리