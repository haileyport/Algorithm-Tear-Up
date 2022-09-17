//벌집
//스터디에서 도움받은 내용으로 엎어씀

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
