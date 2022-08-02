/* 1929번 소수 구하기 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

function solution(input){
    let m = input[0];
    let n = input[1];

    outer : for(let i = m; i <= n; i++){
        // 주어진 수가 1이거나 2로 나눠지면 소수가 아니므로 continue로 넘어간다.
        if(i === 1 || (i !== 2 && i % 2 === 0)){
            continue;
        }

        // 주어진 수를 3부터 자신의 제곱근까지 나눠서 나눠지면 continue로 넘어간다.
        inner : for(let j = 3; j <= Math.sqrt(i); j+= 2){
            if(i % j === 0){
                continue outer;
            }
        }

        console.log(i);
    }
}

solution(input);