const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const wordArr = input.split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const result = alphabet.map((el) => wordArr.indexOf(el));

console.log(result);

let string = "";

result.forEach((el) => {
  string = string + `${el} `;
});

console.log(string);
