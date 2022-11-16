let input = require("fs").readFileSync("06_1152.txt").toString().trim();

if (input === "") {
  console.log(0);
} else {
  console.log(input.split(" ").length);
}
