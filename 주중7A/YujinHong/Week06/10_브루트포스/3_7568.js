const input = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "))
  .slice(1);

let result = "";
for (let i = 0; i < input.length; i++) {
  let rank = 1;
  for (let j = 0; j < input.length; j++) {
    // 본인보다 덩치 큰 사람 있으면 rank(등수) +1
    if (
      Number(input[i][0]) < Number(input[j][0]) &&
      Number(input[i][1]) < Number(input[j][1])
    ) {
      rank++;
    }
  }
  result += rank + " ";
}

console.log(result);
