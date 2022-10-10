let input = Number(require("fs").readFileSync("6_2742.txt"));

let result = "";
for (let i = input; i >= 1; i--) {
  result += i + "\n";
}

console.log(result.trim());
