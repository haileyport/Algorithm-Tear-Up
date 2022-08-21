const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(n => Number(n));

const M = input[0]
const N = input[1]

let primeArrN = [];
for(let i = 2; i <= N; i++){
    primeArrN[i] = i;
}

for(let i = 2; i <= Math.sqrt(N); i++){

    if(primeArrN[i] === 0){
        continue;
    }
    for(let j = i + i; j <= N; j += i){
        primeArrN[j] = 0;
    }
}
primeArrN = primeArrN.filter(el => el !== 0);

let primeArrM = [];
for(let i = 2; i < M; i++){ 
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

let resultArr = primeArrN.filter(el => !primeArrM.includes(el));

console.log(resultArr.join('\n'));