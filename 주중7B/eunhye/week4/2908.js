//상수

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split(" ");

const reverse = (num) => {
  let newNum = "";
  for (i = num.length - 1; i + 1 > 0; i--) {
    newNum += num[i];
  }
  return newNum;
};

const sangun = reverse(input[0]);
const sangsu = reverse(input[1]);

if (sangun > sangsu) {
  console.log(sangun);
} else {
  console.log(sangsu);
}
