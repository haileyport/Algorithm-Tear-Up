//ACM 호텔
console.time("code_measure");

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n");

const testCase = input[0];

let ans = "";

for (i = 1; i <= testCase; i++) {
  const num = input[i].split(" ").map(Number);
  const floor = num[0];
  const room = num[1];
  const guest = num[2];
  let nowFloor = 1;
  let nowRoom = 1;
  let count = 1;

  while (count < guest) {
    if (nowFloor === floor) {
      nowRoom++;
      nowFloor = 0;
    }
    nowFloor++;
    count++;
  }
  if (nowRoom < 10) {
    nowRoom = `0${nowRoom}`;
  }
  ans += `${nowFloor}${nowRoom}\n`;
}

console.log(ans);
console.timeEnd("code_measure");
