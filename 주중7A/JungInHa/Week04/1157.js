// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const word = input[0].toUpperCase().split("");
const alphabets = Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
const result = Array(26).fill(0);

word.map(function(char) {
  let letterIndex = char.charCodeAt() - 65;
  result[letterIndex] += 1;
})

let most = Math.max(...result);
if (result.indexOf(most) === result.lastIndexOf(most)) {
  let alphabet = String.fromCharCode(result.indexOf(most) + 65)
  console.log(alphabet)
} else {
  console.log("?")
}