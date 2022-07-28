//시험 성적

const fs = require("fs");
const input = fs.readFileSync("./../text.txt").toString().split("\n");
const a = parseInt(input);
if (100 >= a && 90 <= a) {
  console.log("A");
} else if (90 > a && 80 <= a) {
  console.log("B");
} else if (80 > a && 70 <= a) {
  console.log("C");
} else if (70 > a && 60 <= a) {
  console.log("D");
} else {
  console.log("F");
}
