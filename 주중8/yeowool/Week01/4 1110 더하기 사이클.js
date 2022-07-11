let input = Number(require('fs').readFileSync('/dev/stdin').toString());
// 입력값 가져오기
let num = input.split(); // num을 선언하여 input을 배열형태로 할당한다.
let sum = 0;  // 분리한 두 숫자를 담을 변수를 선언한다.
let i = 0;  // 최종적으로 출력할 횟수를 변수 i로 선언한다.

while (true) {
    i++;

    sum  = num[0] + num[1];
    if(sum.length === 1) {
        num = sum[0] + num[1];
    } else if(sum.length === 2) {
        num = sum[1] + num[1]
    }
    // sum = Math.floor(num / 10) + num % 10;
    // num = (num % 10) * 10 + sum % 10; 

    if (num === input) {
	break;
    } 
}

console.log(i);