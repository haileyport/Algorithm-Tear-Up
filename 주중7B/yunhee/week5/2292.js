/* 2292번 벌집 */

const fs = require("fs");
const input = +fs.readFileSync("input.txt").toString().trim();

function solution(input){
    let n = 2; // 1을 제외한 초기 벌집값
    let count = 1; // 몇개의 방을 지났는지 카운트

    // 2, 8, 20, 38 => 바퀴마다 n + 6 * count씩 차이남
    while(n <= input){
        n += (6 * count);
        count++;
    }

    console.log(count);
}

solution(input);