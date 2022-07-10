const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

/*
1. 입력 3개의 눈이 빈칸을 사이에 두고 주어짐
2. 출력 게임의 상금 출력
3. 게임 규칙
    같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
    같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
    모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
*/
let first = parseInt(input[0]);
let second = parseInt(input[1]);
let third = parseInt(input[2]);
// 같은 눈 3개 나오는 경우
if(first === second && second === third) { 
    console.log(10000 + first*1000);
// 같은 눈 2개 나오는 경우
} else if (first === second || first === third || second === third) { 
    if (first === second) {
        console.log(1000 + first * 100);
    } else if (first === third) {
        console.log(1000 + first * 100);
    } else {
        console.log(1000 + second * 100);
    }
// 모두 다른 눈 나오는 경우
} else { 
    console.log(Math.max(first, second, third) * 100);
}