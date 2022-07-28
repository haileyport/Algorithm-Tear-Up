/*
통과 여부 : 통과
시간 복잡도 : 5072 ms
공간 복잡도 : 24684 KB
ㅎ.... 시간, 공간복잡도 망했..

[1929번 소수 구하기 / 실버 3]
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

input : 자연수 M과 N이 빈 칸(1 ≤ M ≤ N ≤ 1,000,000
output :  증가하는 순서대로 소수를 출력

[개념 잡기]
- prime number : 소수(1과 자기자신을 제외하고는 나누어떨어지는 수가 없는 자연수)

[의사코드]
0. 입력 받기
1. start 값 이하의 소수 구해서 배열에 추가하기
2. end 값 이하의 소수 구해서 배열에 추가하기
3. filter 함수를 통해 startArr에 존재하면 반환 x

[틀린 이유]
1. 값을 제대로 나오지만 시간 초과
2. 수정했더니 왜 9가 자꾸 끼어들지?
 */

//0. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
//let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split(' ');

// 소수 판별 함수
function isPrime(num) { // num까지의 소수를 모두 출력
    if (num === 2) {
        return true;
    } else {
        for (let i = 2; i * i <= num; i++) { // 2부터 제곱근까지 중에 나눠지는지 확인
            if (num % i === 0) {
                return false;
                break;
            }
        }
        return true;
    }
}

let start = input[0];
let end = input[1];

let startArr = [];
let endArr = [];

// 1. start 값 미만의 소수 구해서 배열에 추가하기
for (let j = 2; j < start; j++) {
    if (isPrime(j)) { // 1부터 start까지의 값 중 소수면,
        startArr.push(j);
    }
}
// 2. end 값 이하의 소수 구해서 배열에 추가하기
for (let k = 2; k <= end; k++) {
    if (isPrime(k)) { // 1부터 start까지의 값 중 소수면,
        endArr.push(k);
    }
}

//console.log(startArr, endArr);

// 3. filter와 includes를 통해 startArr에도 존재하면 반환하지 않기
let result = endArr.filter(function (el) {
    if (startArr.includes(el)) {
        return false;
    }
    return true;
})

//console.log(result);
for (let prime of result) {
    console.log(prime);
}