// 총 N개의 문자열로 이루어진 집합 S가 주어진다.

// 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

// 총 N개의 문자열로 이루어진 집합 S가 주어진다.

// 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 문자열의 개수 N과 M (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 10,000)이 주어진다.

// 다음 N개의 줄에는 집합 S에 포함되어 있는 문자열들이 주어진다.

// 다음 M개의 줄에는 검사해야 하는 문자열들이 주어진다.

// 입력으로 주어지는 문자열은 알파벳 소문자로만 이루어져 있으며, 길이는 500을 넘지 않는다. 집합 S에 같은 문자열이 여러 번 주어지는 경우는 없다.

// 첫째 줄에 M개의 문자열 중에 총 몇 개가 집합 S에 포함되어 있는지 출력한다.

// 예제 입력 1
// 5 11
// baekjoononlinejudge
// startlink
// codeplus
// sundaycoding
// codingsh
// baekjoon
// codeplus
// codeminus
// startlink
// starlink
// sundaycoding
// codingsh
// codinghs
// sondaycoding
// startrink
// icerink

// 예제 출력 1
// 4

const inputs = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

// const [numbers, ...input] = inputs; // numbers: 5, input:11
// const [N] = numbers.split(" ").map(Number); // N=5
// const s = input.slice(0, N);
// const m = input.slice(N);

// function solution(m, s) {
//   const obj = {};
//   let answer = 0;

//   s.forEach((item) => (obj[item] = true));
//   m.forEach((item) => {
//     if (obj[item]) answer++;
//   });
//   return answer;
// }

// console.log(solution(m, s));

const [N, M] = inputs[0].split(" ").map(Number); //5 11
inputs.shift();

let repo = new Set();
let compare = [];
let count = 0;

for (let i = 0; i < N; i++) {
  repo.add(inputs[i].trim());
}

for (let j = N; j < N + M; j++) {
  compare.push(inputs[j].trim());
}

for (let val of compare) {
  if (repo.has(val)) count++;
}

console.log(count);
