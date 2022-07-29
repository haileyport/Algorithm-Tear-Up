// 문자열 S를 입력받은 후에,
// 각 문자를 R번 반복해
// 새 문자열 P를 만든 후 출력

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("\n");

for (const el1 of input) {
  const input2 = el1.split(" ");
  const str = input2[1];

  let result = "";

  if (str === undefined) {
    continue;
  }

  const charArr = String(str).split("");

  for (const el2 of charArr) {
    result += el2.repeat(input2[0]);
  }

  console.log(result);
}
