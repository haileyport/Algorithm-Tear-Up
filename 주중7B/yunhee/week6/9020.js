/* 9020번 골드바흐의 추측 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

function solution(input){
    // 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
    let testCase = input[0];

    root : for(let i = 1; i <= testCase; i++){
        // input[i]보다 작은 소수를 모아서 더해줌....
        let arr = [];

        outer : for(let j = 2; j < input[i]; j++){
            // 주어진 수가 1이거나 2로 나눠지면 소수가 아니므로 continue로 넘어간다.
            if(j !== 2 && j % 2 === 0){
                continue outer;
            }

            // 주어진 수를 3부터 자신의 제곱근까지 나눠서 나눠지면 continue로 넘어간다.
            inner : for(let k = 3; k <= Math.sqrt(j); k += 2){
                if(j % k === 0){
                    continue outer;
                }
            }

            arr.push(j);
        }

        for(let j = arr.length - 1; j >= 0; j--){
            if(arr[j] + arr[j] === input[i]){
                console.log(`${arr[j]} ${arr[j]}`);
                continue root;
            }

            for(let k = j - 1; k >= 0; k--){
                if(arr[j] + arr[k] === input[i]){
                    console.log(`${arr[k]} ${arr[j]}`);
                    continue root;
                }
            }
        }

    }
}

solution(input);