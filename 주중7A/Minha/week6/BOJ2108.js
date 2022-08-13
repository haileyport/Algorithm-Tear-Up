// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const t = Number(input.shift());
// console.log(t);

input = input.map(i => Number(i.trim()));
// console.log(input);

// 산술평균
const avg = Math.round(input.reduce((acc, cur) => acc + cur, 0) / t);
// console.log(Math.round(avg) === -0 ? 0 : Math.round(avg)); // -0으로 나오는 경우 0으로 바꿔줌

// 중앙값
input.sort((a, b) => a - b);
const mid = input[Math.ceil(t / 2) - 1];
// console.log(mid);

// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
let counter = {}; // key = 숫자, value = 출현 횟수 
let frequency = 0; // 최빈값의 출현 횟수

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  // counter에 각 숫자의 출현 횟수를 세준다
  (counter[num] == null) ? counter[num] = 1 : counter[num]++;

  // 숫자의 출현 횟수가 frequency 보다 높으면 frequency 값을 업데이트 해준다
  if (counter[num] > frequency) {
    frequency = counter[num]
  }
}
// counter의 요소중 출현 횟수가 frequency랑 같은 요소의 키(=숫자)를 최빈값으로 한다
let mode = Object.keys(counter).filter(key => counter[key] === frequency);
// 최빈값이 하나보다 많으면 증가하는 순서로 정렬해 2번째([1]) 요소를 최빈값으로 한다
if (mode.length > 1) {
  mode.map(n => Number(n));
  mode.sort(function (a, b) {
    return a - b;
  })
  mode = mode[1];
}
// console.log(mode);
// 범위
let diff = input[t - 1] - input[0];


console.log(`${avg}\n${mid}\n${mode}\n${diff}`)