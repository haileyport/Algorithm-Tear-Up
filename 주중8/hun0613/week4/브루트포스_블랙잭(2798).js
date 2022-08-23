// memory : 10296KB
// time : 388ms


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/*
    check.1 : 각 카드에는 양의 정수
    check.2 : M보다 작게 카드 3장을 찾아 합을 출력
    check.3 : 첫째줄에 카드 갯수 , M


    1. cardSet = input[1].split(' ')
    1, sum = 0 선언
    1. maxSum = 0 선언
    1. M = input[0][1]

    2. for문으로 i는 0부터 카드갯수 -1 만큼
        2-1. for문으로 j는 1부터 카드갯수 -1 만큼
            3-1. for문으로 k는 2부터 카드갯수 -1 만큼
                3-1-1. sum = cardSet[i] + cardSet[j] + cardSet[k]
                3-1-2. 만약, sum이 M보다 작고, maxSum보다 크면
                    3-1-2-1. maxSum = sum
*/

const cardSet = input[1].split(' ');
const condition = input[0].split(' ');

let sum = 0;
let maxSum = 0;
const M = parseInt(condition[1]);

for(let i = 0; i < parseInt(condition[0]); i++){
    for(let j = 1; j < parseInt(condition[0]); j++){
        for(let k = 2; k < parseInt(condition[0]); k++){
            sum = parseInt(cardSet[i]) + parseInt(cardSet[j]) + parseInt(cardSet[k]);

            if(sum <= M && sum > maxSum 
                && (parseInt(cardSet[i]) !== parseInt(cardSet[j])) 
                && (parseInt(cardSet[j]) !== parseInt(cardSet[k]))
                && (parseInt(cardSet[i]) !== parseInt(cardSet[k]))){
                    
                    maxSum = sum;
                    // console.log(parseInt(cardSet[i]), parseInt(cardSet[j]), parseInt(cardSet[k]))
                    // console.log(maxSum)
            }
        }
    }
}

console.log(maxSum)
