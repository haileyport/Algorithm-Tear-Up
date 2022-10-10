let input = Number(require("fs").readFileSync("3_8393.txt"));

let result = 0;
for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);
