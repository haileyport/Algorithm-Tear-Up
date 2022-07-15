const [firstLine, input] = require("fs")
  .readFileSync("11_10871.txt")
  .toString()
  .trim()
  .split("\n");

let num = Number(firstLine.split(" ")[1]);
// let result = "";

input
  .split(" ")
  .map(Number)
  .filter((arr) => num > arr)
  .join(" ")
  // .map((i) => (result += i + " "));
console.log(result);
