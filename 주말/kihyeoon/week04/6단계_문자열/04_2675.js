const input = require("fs").readFileSync("04_2675.txt").toString().split("\n");

const num1 = input.shift();

for (let i = 0; i < num1; i++) {
  let answer = "";

  const [num2, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let c = 0; c < num2; c++) {
      answer += str[j];
    }
  }

  console.log(answer);
}
