//다이얼

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim();

//숫자 1은 2초
//숫자 증가할 때마다 +1초

const strTonum = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let ans = 0;

for (key in strTonum) {
  for (i = 0; i < input.length; i++) {
    if (strTonum[key].includes(input[i])) {
      ans += Number(key);
    }
  }
}

console.log(ans);
