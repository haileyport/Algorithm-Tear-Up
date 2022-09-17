const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(n => Number(n));

const M = input[0]
const N = input[1]

//console.log(M, N);

// N까지 소수 구하기 -> 에라토스테네스의 체 사용

//2부터 N까지 해당 숫자를 다 채운 배열 만들기
let primeArrN = [];
for(let i = 2; i <= N; i++){
    primeArrN[i] = i;
}
// [empty, empty, 2, 3, 4, ... M]
//primeArr에서 2부터 N의 제곱근까지 자신을 제외한 모든 배수들을 0으로 바꾸자
for(let i = 2; i <= Math.sqrt(N); i++){
    //2 2*2 2*3 2*4
    //3 3*2 3*3 3*4
    if(primeArrN[i] === 0){
        continue;// 중복된 작업 스킵하기 위한 continue
    }
    for(let j = i + i; j <= N; j += i){
        primeArrN[j] = 0;
    }
}
primeArrN = primeArrN.filter(el => el !== 0); // 배열에서 0을 모두 제외시키면 소수만 남음

// M에 대해서도 똑같은 작업 수행
let primeArrM = [];
for(let i = 2; i < M; i++){ // ex)M이 61일경우 N소수배열과 M소수배열에 모두 61이 있어서 겹쳐지므로 <=가 아니라 <를 써야함
    primeArrM[i] = i;
}

for(let i = 2; i <= Math.sqrt(M); i++){

    if(primeArrM[i] === 0){
        continue;
    }
    for(let j = i + i; j <= M; j += i){
        primeArrM[j] = 0;
    }
}
primeArrM = primeArrM.filter(el => el !== 0);

//let resultArr = primeArrN.filter(el => primeArrM.indexOf(el) == -1);
let resultArr = primeArrN.filter(el => !primeArrM.includes(el)); // M소수 배열과 N소수 배열에서 중복되는 값 제거.
//console.log(resultArr);

const sum = resultArr.reduce((pre, cur) => pre + cur, 0) // 합 구하기

if(!resultArr.length){
    console.log(-1); // 소수가 없다면 -1 출력
}else{
    console.log(`${sum}\n${resultArr.shift()}`);
}