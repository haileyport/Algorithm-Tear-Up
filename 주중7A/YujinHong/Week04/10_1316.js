// 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
// 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

const resultArr = input.slice(1).fill(true);

for (let i = 1; i <= input[0]; i++) {
  const charArr = input[i].split("");

  for (let j = 0; j < charArr.length; j++) {
    // 그룹 단어가 아니면
    if (
      charArr[j] !== charArr[j + 1] &&
      charArr[j] !== charArr[j - 1] &&
      input[i].replace(charArr[j], "").includes(charArr[j])
    ) {
      // console.log(charArr[j]);
      resultArr[i - 1] = false;
      break;
    }
  }
}

// console.log(resultArr);

let resultCnt = 0;
for (const el of resultArr) {
  if (el === true) {
    resultCnt++;
  }
}

console.log(resultCnt);
