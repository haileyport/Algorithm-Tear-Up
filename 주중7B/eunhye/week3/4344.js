//평균은 넘겠지

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString().trim().split("\n");

let ans = "";

for (k = 1; k < input.length; k++) {
  const per = getAverage(input[k]);
  ans += `${per}%\n`;
}

console.log(ans);

function getAverage(score) {
  let sum = 0;
  const scoreList = score.trim().split(" ");
  const student = scoreList.shift();
  scoreList.forEach((e) => (sum += Number(e)));
  const average = sum / student;
  const percnet = (compareScore(scoreList, average).length / student) * 100;

  return percnet.toFixed(3);
}

function compareScore(list, avg) {
  let topList = [];
  for (i = 0; i < list.length; i++) {
    if (list[i] > avg) {
      topList.push(list[i]);
    }
  }
  return topList;
}
