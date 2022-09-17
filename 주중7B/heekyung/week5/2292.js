const input = require("fs").readFileSync("/dev/stdin").toString();
let num = Number(input);
let count = 1;
let n = 1;
num--;
while (num > 0) {
  num = num - 6 * n;
  n++;
  count++;
}
console.log(count);
