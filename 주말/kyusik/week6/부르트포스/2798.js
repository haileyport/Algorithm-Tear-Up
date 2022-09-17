const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const NM = input.shift().split(' ').map(num => parseInt(num));
const N = NM.shift();
const M = NM.shift();
const cardArr = input.shift().split(' ').map(num => parseInt(num));
let max = 0;
 
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
        let sum = cardArr[i] + cardArr[j] + cardArr[k];
            if (sum > max && sum <= M) {
            max = sum;
            }
        }
    }
}
 
console.log(max);


// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const A = input[0].split(' ');
// const N = parseInt(A[0]);
// const M = parseInt(A[1]);
// const cards = input[1].split(' ').map(el => parseInt(el));
// let firstNum = 0;
// let secondNum = 0;
// let thirdNum = 0;

// for(let i = 0; i < cards.length - 2; i++){
//     firstNum = cards[i];
//     console.log(firstNum);
//     for(let j = i + 1; j < i + 2; j++){
//         secondNum = cards[j];
//         console.log(secondNum);
//         for(let k = j + 1; k < j + 2; k++){
//             thirdNum = cards[k]
//             //console.log(thirdNum);
//         }
//     }
// }

/* 
5장에서 순서상관없이 3장을 뽑아 더함
21에서 더한값을뺐을때 음수면 안됨
뺐을때 양수인 값들 중 차이가 가장 작은값.

아니면 21에서 더한값을뺐을때 음수가 아닌 수 중에서 최댓값을 계속 갱신해주면된다.
만약 21이되면 브레이크
*/