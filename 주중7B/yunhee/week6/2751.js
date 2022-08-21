/* 2751번 수 정렬하기2 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    // 앞에 수의 개수를 제외
    input.shift();

    // 오름 차순으로 정렬한 후 각 요소마다 줄바꿈을 추가해서 합쳐준다.
    let result = input.sort((a, b) => a - b).join("\n");

    console.log(result);
}

solution(input);