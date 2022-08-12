const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = Number(input.shift());
let numArr = input.map(x => +x);
let len = numArr.length;
let answer = '';
let avg = center = countNum = range = 0;

numArr.sort(function (a,b) {return a - b;});
//각 숫자를key 그 숫자의 빈도를 value값에 담음
const uniq = numArr.reduce((accu, curr) => { 
  accu[curr] = (accu[curr] || 0)+1; 
  return accu;
}, {});

let minArr = [];
let uniqMaxNum = Math.max.apply(null, Object.values(uniq));
Object.keys(uniq).forEach(function(key) {
  if(uniq[key] === uniqMaxNum) {
    minArr.push(key);
  }
});

if(minArr.length > 1) {
  minArr.sort(function (a,b) {return a - b;});
  countNum = minArr[1];
} else {
  countNum = minArr[0];
}

let sum = numArr.reduce((a,b) => {return a+b;});
avg = Math.round(sum/N);
center = numArr[Math.floor(len/2)];
range = numArr[len-1] - numArr[0];
answer = avg + '\n' + center + '\n' + countNum + '\n' + range;
console.log(answer);
// 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.

// 둘째 줄에는 중앙값을 출력한다.

// 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.

// 넷째 줄에는 범위를 출력한다.

