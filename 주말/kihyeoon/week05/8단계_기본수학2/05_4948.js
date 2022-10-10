const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt"
  )
  .toString()
  .split("\n")
  .map((num) => parseInt(num));

// 0~limit까지 소수구하기
const limit = 123456 * 2; //2n까지의 소수를 구해야하기때문이다!
let isPrime = Array(limit + 1).fill(true);
// 소수가 될 수 없는 0과 1은 false로 지정해둔다.
isPrime[0] = false;
isPrime[1] = false;
// 에라토스테네스의 체 활용
for (let i = 2; i <= limit; i++) {
  const root = parseInt(Math.sqrt(i)); //제곱근이하로 범위제한
  for (let j = 2; j <= root; j++) {
    if (i !== j && i % j === 0) {
      isPrime[i] = false;
      break;
    }
  }
}

// input에서 값 받아와서 primecnt 구하기
function getPrimeCnt(num) {
  let cnt = 0;
  for (let i = num + 1; i < num * 2; i++) {
    //num 초과 num*2 미만의 범위를 구한다.
    if (isPrime[i]) cnt++;
  }
  console.log(cnt);
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  getPrimeCnt(input[i]);
}
