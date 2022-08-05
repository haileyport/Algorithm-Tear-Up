//문자열 반복

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");

//input[0] = test case count
//input[i][0]번 반복
//input[i][1] = 문자열

//input[1]의 각 문자를 input[0]번 반복해 새 문자열을 만들어서 출력

const repeatR = (repeat, word) => {
  let ans = "";
  for (k = 0; k < word.length; k++) {
    ans += word[k].repeat(repeat);
  }
  return ans;
};

let ans = "";

for (i = 1; i < input.length; i++) {
  const ele = input[i].split(" ");
  ans += `${repeatR(ele[0], ele[1])}\n`;
}

console.log(ans);
