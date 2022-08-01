/* 2775번 부녀회장이 될테야 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    let testCase = +input[0];

    for(let l = 0; l < testCase; l++){
        let k = +input[l * 2 + 1];
        let n = +input[l * 2 + 2];

        // k - 1층에 1 ~ n호까지 사람들 수의 합만큼 사람이 있어야 한다.
        let arr = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

        for(let i = 1; i <= n; i++){
            // 0층의 i호에는 i명이 산다.
            arr[0][i] = i;
        }

        // 층별로 호수를 돌아가며 인원 체크(0층은 이미 있으니 제외)
        for(let i = 1; i <= k; i++){
            for(let j = 1; j <= n; j++){
                // i - 1층의 j호의 사람 수 + i층 j-1호의 사람 수(i-1층 1 ~ j-1의 합과 같음)를 합한다
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            }
        }
        
        console.log(arr[k][n]);
    }
}

solution(input);