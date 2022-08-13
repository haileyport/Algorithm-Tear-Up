const fs = require("fs");
const testCase = fs.readFileSync(0, "utf-8").toString();

for (let i = 0; i < Number(testCase); i++) {
  let space = "";

  for (let j = Number(testCase) - 1; j >= 0; j--) {
    space += j <= i ? "*" : " ";
  }
  console.log(space);
}
