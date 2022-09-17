/* 2581번 소수 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

function solution(input){
    // 소수의 합과 최솟값을 찾아라
    // 소수가 없을 경우 -1을 리턴
    let m = input[0];
    let n = input[1];
    let arr = [];

    outer : for(let i = m; i <= n; i++){
        // 주어진 수가 1이거나 2로 나눠지면 소수가 아니므로 continue로 넘어간다.
        if(i === 1 || (i !== 2 && i % 2 === 0)){
            continue;
        }

        // 주어진 수를 3부터 자신 전까지 나눠서 나눠지면 continue로 넘어간다.
        inner : for(let j = 3; j < i; j++){
            if(i % j === 0){
                continue outer;
            }
        }

        arr.push(i);
    }

    if(arr.length !== 0){
        let sum = arr.reduce((acc,cur) => acc + cur);
        let min = Math.min(...arr);

        console.log(`${sum}\n${min}`);
    }else{
        console.log(-1);
    }

}

solution(input);