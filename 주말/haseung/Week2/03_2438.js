const fs = require("fs");
const testCase = fs.readFileSync(0, "utf-8").toString();

let space = "";

for (let i = 0; i < testCase; i++) {
  space += "*";
  console.log(space);
}
