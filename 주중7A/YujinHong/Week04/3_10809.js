// 알파벳 소문자로만 이루어진 단어 S가 주어진다.
// 각각의 알파벳에 대해서,
// 단어에 포함되어 있는 경우에는 처음 등장하는 위치를,
// 포함되어 있지 않은 경우에는 -1을 출력

const input = require("fs").readFileSync("../ex.txt").toString().trim();

// 소문자 알파벳 배열
const alphabets = Array.from({ length: 26 }, (v, i) =>
  String.fromCharCode(i + 97)
);

let result = "";

for (const element of alphabets) {
  result += input.indexOf(element) + " ";
}

console.log(result);
