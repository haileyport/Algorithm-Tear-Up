/* 1978번 소수 찾기 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    let n = +input[0];
    let arr = input[1].split(" ").map(Number);
    let count = 0;

    outer : for(let i = 0; i < n; i++){
        // 주어진 수가 1이거나 2로 나눠지면 소수가 아니므로 continue로 넘어간다.
        if(arr[i] === 2){
        }else if(arr[i] === 1 || arr[i] % 2 === 0){
            continue;
        }

        // 주어진 수를 3부터 자신 전까지 나눠서 나눠지면 continue로 넘어간다.
        inner : for(let j = 3; j < arr[i]; j++){
            if(arr[i] % j === 0){
                continue outer;
            }
        }

        count++;
    }

    console.log(count);
}

solution(input);