/* 4948번 베르트랑 공준 */


const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

function solution(input){
    // n < i <= 2n는 적어도 하나 존재한다.
    for(let i = 0; i < input.length - 1; i++){
        let count = 0;

        outer : for(let j = input[i]+1; j <= input[i]*2; j++){
            // 주어진 수가 1이거나 2로 나눠지면 소수가 아니므로 continue로 넘어간다.
            if(j === 1 || (j !== 2 && j % 2 === 0)){
                continue;
            }

            // 주어진 수를 3부터 자신의 제곱근까지 나눠서 나눠지면 continue로 넘어간다.
            inner : for(let k = 3; k <= Math.sqrt(j); k += 2){
                if(j % k === 0){
                    continue outer;
                }
            }

            count++;
        }
        console.log(count);
    }
}

solution(input);