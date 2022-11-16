const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

if (input >= 90) {
    console.log('A');
} else if (input >= 80) {
    console.log('B');
} else if (input >= 70) {
    console.log('C');
} else if (input >= 60) {
    console.log('D');
} else {
    console.log('F')
}

/* input은 0보다 크거나 같고 100보다 작거나 같은 정수
n >= 90 === A
n >= 80 === B
n >= 70 === C
n >= 60 === D
else F


리눅스 환경에선 node output.js 입력하고 인풋에 숫자 바꿀필요없이 바로 터미널에서 원하는 입력값 넣고 ctrl D 누르면 결과나온다.
*/
