let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
// 입력값 받아오기

let num = Number(input); // input을 num에 숫자형태로 다시 할당한다.
let result = "";
for(let i = 1; i <= 9; i++) {
        val = num * i
        result += `${num} * ${i} = ${val}` + `\n` // for문으로 입력받은 수 만큼 곱셈을 반복하여 출력한다.
    }
console.log(result);