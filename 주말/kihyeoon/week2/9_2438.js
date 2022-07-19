let input = Number(require("fs").readFileSync("9_2438.txt"));

let result = "";

for (let i = 0; i < input; i++) {
  result = result + "*";
  console.log(result);
}