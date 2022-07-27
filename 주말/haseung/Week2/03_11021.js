const fs = require("fs");
const testCase = fs.readFileSync(0, "utf-8").toString().split("\n");

for (let i = 1; i <= testCase[0]; i++) {
  let result = testCase[i].split(" ");
  console.log(`Case #${i}: ${Number(result[0]) + Number(result[1])}`);
}
