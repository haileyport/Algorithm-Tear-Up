/* 2869번 달팽이는 올라가고싶다 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(Number);

function solution(input){
    // V - A + B
    // 달팽이가 막대를 모두 올라가려면 며칠이 걸리는지 구하라
    let result = 0;
    let count = 0;

    // 누적된 미터가 V미터보다 적을 때까지 반복
    while(result < input[2]){
        result += input[0];

        // 정상에 올라간 후에는 미끄러지지 않는다.
        if(result >= input[2]){
            break;
        }else{
            result -= input[1];
        }

        count++;
    }

    console.log(count + 1);
}

solution(input);