// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때,
// 주어진 글자의 아스키 코드값을 출력

const input = require("fs").readFileSync("../ex.txt").toString().trim();

console.log(input.charCodeAt());
