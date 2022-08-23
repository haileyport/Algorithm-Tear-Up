//단어공부

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().toUpperCase();
const obj = {};

for (i = 0; i < input.length; i++) {
  if (obj[input[i]] === undefined) {
    obj[input[i]] = 1;
  } else {
    obj[input[i]] += 1;
  }
}

const keys = Object.keys(obj);
let max = 0;
let maxAlpha = "";
for (k = 0; k < keys.length; k++) {
  let value = obj[keys[k]];
  if (value >= max) {
    if (value === max) {
      maxAlpha = "?";
      max = value;
    } else {
      max = value;
      maxAlpha = keys[k];
    }
  }
}
console.log(maxAlpha);
