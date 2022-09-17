/* 2108번 통계학 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n").map(Number);

function solution(input){
    let n = input.shift(); // 수의 개수
    input.sort((a, b) => a - b);

    // n개의 수들의 합을 n으로 나눈 값
    console.log((input.reduce((acc, cur) => acc + cur) / n).toFixed());

    // n개의 수들을 오름차순으로 나열했을 때 중앙에 있는 값
    console.log(input[Math.floor(n/2)]);

    // n개의 수들 중 가장 많이 나타나는 값
    // 여러 개 있을 때는 두 번째로 작은 값
    let max = 0;
    let value = 0;
    
    for(let i = 0; i < n; i++){
        let count = input.filter((e) => e === input[i]).length;
        
        if(count >= max){
            max = count;
            value = input[i];
        }
    }
    
    console.log(value);

    // n개의 수들 중 최대값과 최솟값의 차이
    let maxVal = Math.max(...input);
    let minVal = Math.min(...input);

    console.log(maxVal - minVal);
}

solution(input);