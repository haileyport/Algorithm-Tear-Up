const input = Number(require("fs").readFileSync("/dev/stdin"));

let count = 0;

for (let i = 1; i <= input; i++) {
  let nArr = String(i);
  // 100미만은 무조건 한수
  if (i < 100) {
    count++;
    continue;
  }
  // 3자리수 숫자의 각 자리수 차이 비교해서 같으면 한수
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
  }
}

console.log(count);
