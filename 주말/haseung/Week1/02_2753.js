const fs = require("fs");
let inputs = fs.readFileSync(0, "utf-8").toString().split(" ");
inputs = Number(inputs);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("1");
} else {
  console.log("0");
}
