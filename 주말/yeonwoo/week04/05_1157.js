// 틀렸음 수정 필요

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

// const input = 'ba'.trim();

const arr = input.split("");

const obj = {};

arr.forEach((el) => {
  obj[el] = 0;
});

let count = 0;

const objKeys = Object.keys(obj);

objKeys.forEach((key) => {
  arr.forEach((el) => {
    if (el === key) {
      count++;
      obj[key] = count;
    }
  });
  count = 0;
});

const objValues = Object.values(obj);

let maxNum = 0;

for (let i = 0; i < objValues.length; i++) {
  if (maxNum < objValues[i]) maxNum = objValues[i];
}

objValues.forEach((value) => {
  if (maxNum === value) count++;
});

if (count >= 2) console.log("?");
else {
  const indexOfMaxNum = objValues.indexOf(maxNum);

  console.log(objKeys[indexOfMaxNum]);
}
