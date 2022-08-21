// const inputs = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const inputs = ["5", "55 185", "58 183", "88 186", "60 175", "46 155"];
const T = inputs.shift(); // 전체 사람의 수
const kgCm = inputs.map((kc) => kc.split(" ").map((num) => Number(num))); // kg, cm

// console.log(kgCm); => [[55, 185], [58, 183], [88, 186], [60, 175], [46, 155]]
const rank = [];

for (let i = 0; i < T; i++) {
  // 전체 사람의 수만큼 반복
  let counter = 1; // 카운터를 1로 초기화한다.
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      //몸무게 && 키 비교
      if (kgCm[i][0] < kgCm[j][0] && kgCm[i][1] < kgCm[j][1]) {
        counter++;
      }
    }
  }
  rank.push(counter);
}

console.log(rank.join(" "));
