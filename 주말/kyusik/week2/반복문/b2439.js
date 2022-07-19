const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split();

let n = input[0];

for (let i = 1; i <= n; i++) {
    let result = '';
    for (let j = n; j >= 1; j--) {
        result = result + (j > i ? ' ' : '*');
    }
    console.log(result);
}

/* 
1. n-1 만큼 ' '출력
2. 그 뒤에 1만큼 *출력
3. n-2 만큼 ' '출력
4. 그 뒤에 2만큼 *출력
...
5. n-n만큼 ' '출력
6. 그 뒤에 n만큼 *출력
*/