// ⚡

const input = require("fs")
  .readFileSync("../ex.txt")
  .toString()
  .trim()
  .split("");

const dial = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let time = 0;

for (const el of input) {
  for (let j = 3; j < 11; j++) {
    if (dial[j].includes(el)) {
      time += j;
    }
  }
}

console.log(time);
