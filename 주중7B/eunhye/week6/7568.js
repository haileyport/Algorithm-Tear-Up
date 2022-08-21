//덩치

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");
input.shift();

const person = input.map((el) => el.split(" ").map(Number));

const rank = new Array(person.length).fill(1);

//키와 몸무게 둘 다 높으면 랭크 업
//키와 몸무게 중 하나만 높으면 랭크 변동 X
for (i = 0; i < person.length - 1; i++) {
  for (j = i + 1; j < person.length; j++) {
    if (person[i][0] > person[j][0] && person[i][1] > person[j][1]) {
      rank[j]++;
    } else if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) {
      rank[i]++;
    }
  }
}

console.log(rank.join(" "));
