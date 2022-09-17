//통계학

//홀수 N에 대해 기본 통계값은 4가지
//산술평균: N개의 수 합을 N으로 나눔(avg)
//중앙값: N개의 수들을 증가 순으로 나열했을 때 가운데 있는 값
//최빈값: N개의 수 중 가장 많이 나오는 값
//범위: N개의 수 중 최댓값-최소값

const fs = require("fs");
const raw = fs.readFileSync("./text.txt", "utf8");
const input = raw.trim().split("\n").map(Number);
const count = input.shift();

const avg =
  Math.round(
    input.reduce((acc, cur) => {
      return acc + cur;
    }) / count
  ) || 0;
//-0||0 === 0

const center = input.sort((a, b) => b - a)[Math.floor(count / 2)]; //idx는 0부터니까 숫자 개수를 2로 나눠서 내림

const freq = input
  .sort((a, b) => a - b)
  .reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {}); //빈도를 reduce로 구해서 객체로 저장

let minArr = []; //빈도 높은 것 중에서 두번째로 작은 key를 구해야함

//가장 빈도 높은 value 구함
let freqMax = Math.max(...Object.values(freq));
//key를 활용해서 각각의 key의 value가 freqMax에 해당하면 minArr에 key 넣기
Object.keys(freq).forEach((key) => {
  if (freq[key] === freqMax) {
    minArr.push(key);
  }
});

//minArr 길이를 구해서 하나면 그대로 내보내고, 그 이상이면 sort해 두번째를 내보냄
let most;
if (minArr.length > 1) {
  minArr.sort((a, b) => a - b);
  most = minArr[1];
} else {
  most = minArr[0];
}

const range = Math.max(...input) - Math.min(...input);

console.log(avg);
console.log(center);
console.log(most);
console.log(range);
