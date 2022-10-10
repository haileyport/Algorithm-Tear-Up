const input = require("fs").readFileSync("7_4344.txt").toString().split("\n");

let num = input[0];
const scores = input.map((el) => el.split(" ").map(Number));
for (let i = 1; i <= num; i++) {
  let score = scores[i];
  let num2 = score.shift();
  let count = 0;
  let avg = score.reduce((acc, cur) => (acc += cur), 0) / num2;

  for (let j = 0; j < num2; j++) {
    if (score[j] > avg) {
      count++;
    }
  }

  let result = ((count / num2) * 100).toFixed(3);

  console.log(result + "%");
}
