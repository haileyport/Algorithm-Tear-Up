
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift().split(' ').map(Number)
const testCase1 = testCase[0]

// let groupM = input.slice(0, testCase1)
// let groupS = input.slice(testCase1)

// const obj = {}
// let count = 0

// groupS.forEach(i=>obj[i]=true)
// groupM.forEach(i=> {if(obj[i]) return count++})
// console.log(count+'\n'+)

//틀렸습니다


const noHearSet = new Set();
const noSeeSet = new Set();
for (let i = 0; i < input.length; i++) {
    if (i < N) {
        noHearSet.add(input[i]);
    } else {
        noSeeSet.add(input[i]);
    }
}
let answer = [];
noSeeSet.forEach(v => {  // 그냥 예시에서 주어진 값 중에 길이가 긴 것을 비교대상으로 잡음.
    if (noHearSet.has(v)) answer.push(v);
});
console.log(answer.length + '\n' + answer.join('\n'));

//set 함수를 사용해야함
// set add() > set에 val값추가
// set delete() > set 에 제거
// set has() > 값이 존재하는지 true false로 반환
// set clear() > set내 모든요소 제거