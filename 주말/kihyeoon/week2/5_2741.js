let input = Number(require("fs").readFileSync("5_2741.txt"));

let result = "";
for (let i = 1; i <= input; i++) {
  result += i + "\n";
}

console.log(result.trim());
