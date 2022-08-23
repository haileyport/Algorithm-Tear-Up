const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n").map(n => Number(n));
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(n => Number(n));;

const N = input[0];
input.shift();

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
let sum = input.reduce((acc, cur) => acc + cur, 0);
let average = Math.round(sum / N);

// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
input.sort(function(a, b) {
  return a - b;
});
const halfN = Math.ceil( N / 2 ) 
let median = input[halfN - 1];

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
  mode.sort(function(a, b) {
    return a - b;
  })
  mode = mode[1];
}

// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
let range = input[input.length - 1] - input[0];

console.log(`${average}\n${median}\n${mode}\n${range}`)