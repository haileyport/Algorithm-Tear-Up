/* 2798번 블랙잭 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    // 카드의 합이 21이 넘지않는 한도 내에서 카드의 합을 크게 만들자
    let n = input[0].split(" ")[0]; // 카드의 개수
    let m = input[0].split(" ")[1]; // 3장을 합쳤을 때 m을 넘지 않아야 함
    
    let nums = input[1].split(" ").map(Number);
    let max = 0;

    // 세장의 카드가 겹치지 않도록 반복하면서 합친다.
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
    
                // 세장의 합이 m보다 크면 다음으로 넘어간다.
                if(sum > m){
                    continue;
                }

                // 세장의 합이 max보다 크면 max에 합을 넣어준다.
                if(sum > max){
                    max = sum;
                }
            }
        }
    }

    console.log(max);
}

solution(input);