const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split();

//console.log(input);
//input = [ '5' ]

let n = input[0];
let result = '';

for (let i = 1; i <= n; i++) {
    console.log(result+'*'); // 우선 ''+'*'로 * 출력
    result = result + '*'; //그 뒤로 for문이 돌때마다 '*'이 이전 결과에 더해져서 출력
}

//console.log(result);