const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

// const input = '839 237'.trim().split(' '); console.log(input);

const splitAll = input.map((el) => el.split(""));

splitAll.forEach((el) => el.reverse());

const numbers = splitAll.map((el) => Number(el.join("")));

console.log(Math.max(...numbers));
