/*연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다.
 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 
하지만, 2000년은 400의 배수이기 때문에 윤년이다. 

input : 1<= input && 4000 <= input : input 값에 대한 코드도 짜야 할까?
output : 윤년 => 1, 아니면 0
*/

// 메모리 9348 KB 시간 136 ms

// 입력값을 성적만 받음.
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let isLeap = 0; // Leap year(윤년)을 확인하는 변수 0으로 설정

//틀린 이유 1 : isLeap 앞에 " 따옴표 하나가 있었음
if((input % 4 === 0) && (input % 100 !== 0) || (input % 400 === 0)){
    isLeap = 1;
    console.log(isLeap);
}else {
    console.log(isLeap);
}