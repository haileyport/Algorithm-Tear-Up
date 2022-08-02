/* 2798번 블랙잭 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    // 카드의 합이 21이 넘지않는 한도 내에서 카드의 합을 크게 만들자
    let n = input[0].split(" ")[0]; // 카드의 개수
    let m = input[0].split(" ")[1]; // 3장을 합쳤을 때 m을 넘지 않아야 함
    
    let nums = input[1].split(" ").map(Number);
    let max = 0;

    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
    
                if(sum > m){
                    continue;
                }

                if(sum > max){
                    max = sum;
                }
            }
        }
    }

    console.log(max);
}

solution(input);