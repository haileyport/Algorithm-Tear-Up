// 조건문  2525_오븐시계 실패
// 난이도 :  브론즈3
// 풀이시간 :  시간
// 메모리 :	  KB      
// 시간 :   ms      
// 코드길이 :  B

// 조건문으로 문제를 풀이하기!

// 세가지로 조건으로 나눌 수있다.
// 1. 분과 조리시간을 더해도 60이 넘지 않는 경우
//    => 시간은 그대로 출력하고 현재 분과 조리시간만 더해서 return 
// 2. 분과 조리시간을 더한 숫자가 60을 넘으면서 60으로 나누었을 때 나머지가 0인경우
//    => totalM(분+조리시간)을 60으로 나눈 몫을 시간에 더하고 분은 0으로 return 
// 3. 분과 조리시간을 더한 숫자가 60을 넘으면서 60으로 나누어 떨어지지 않을 때
//    => totalM(분+조리시간)을 60으로 나누고 소숫점 자리를 없앤 후 시간과 더해주어 시간으로 return
//       소수점 떼어낸 숫자 곱하기 60을 한 값을 totalM에서 뺀다. 이 값을 분으로 return 
// 마지막에 시간이 24일 경우 0으로 바꿔주는 조건문 만들어주면 끝!

// 이게될까? 


const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

input = ["23 48", "25"]

const now = input[0].split(" ").map(Number);
const [nowHour, nowMinute] = [now[0], now[1]]
const cookingTime = Number(input[1]);

let totalMinute = cookingTime + nowMinute;

let result = "";
let plusHour = 0;
let minusMinute = 0;

if(totalMinute <= 60) {
    result = nowHour + " " + totalMinute
} else if(totalMinute > 60) {
    if(totalMinute % 60 === 0) {
        plusHour = nowHour + (totalMinute / 60);
        if(plusHour === 24) {
            plusHour = 0
        } else if(plusHour <= 23) {
            plusHour = plusHour
        }
        result = plusHour + " " + 0
    } else if(totalMinute % 60 !== 0){
        plusHour = nowHour + (Math.floor(totalMinute / 60));
        minusMinute = totalMinute - (60 * (Math.floor(totalMinute / 60)))
        if(plusHour === 24) {
            plusHour = 0
        } else if(plusHour <= 23) {
            plusHour = plusHour
        }
        result = plusHour + " " + minusMinute;
    }
}
console.log(result)

// 24시간일때 0으로 어케하지 생각멈춤
// 넘길다..
// 답은 나오는데 런타임에러말고 틀렸습니다..?