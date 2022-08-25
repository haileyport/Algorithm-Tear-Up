const fs = require("fs");
const input = fs.readFileSync("../ex.txt").toString().trim().split("\n");

const mul = String(Number(input[0]) * Number(input[1]) * Number(input[2]));
const mulArr = mul.split("");

const countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (const el of mulArr) {
  switch (el) {
    case "0":
      countArr[0]++;
      break;
    case "1":
      countArr[1]++;
      break;
    case "2":
      countArr[2]++;
      break;
    case "3":
      countArr[3]++;
      break;
    case "4":
      countArr[4]++;
      break;
    case "5":
      countArr[5]++;
      break;
    case "6":
      countArr[6]++;
      break;
    case "7":
      countArr[7]++;
      break;
    case "8":
      countArr[8]++;
      break;
    case "9":
      countArr[9]++;
      break;
    default:
      break;
  }
}

for (const el of countArr) {
  console.log(el);
}
