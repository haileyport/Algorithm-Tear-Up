/* 1110번 더하기 사이클 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString();

function solution(input){
    // 주어진 수가 10보다 작으면 앞에 0을 붙여 두자리 수로 만든다
    // 각 자리의 숫자를 더한다
    // 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리수를 이어붙인다
    // 위 행위를 몇번 반복했을 때 원본으로 돌아오는지 출력
    let currentVal;
    let count = 0;

    while(currentVal !== input){ 
        let temp = currentVal === undefined ? input : currentVal;

        if(temp < 10){
            temp = `0${temp}`;
        }

        let divide = String(temp).split("");
        let sum = String(Number(divide[0]) + Number(divide[1])).split("");

        currentVal = sum.length > 1 ? Number(`${divide[1]}${sum[1]}`) : Number(`${divide[1]}${sum[0]}`);
        
        count++;
    }

    console.log(count);
    
}

solution(input);