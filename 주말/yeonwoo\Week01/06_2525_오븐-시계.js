// 문제: 현재시간 A시 B분을 받고 요리하는 데 필요한 시간 C를 입력받아 요리가 끝나는 시간을 시 분 형태로 반환합니다.
// 입력: 정수 A,B,C (0<=A<=23, 0<=B<=59, 0<=C<=1000)
// 출력: 시 분 (정수)
// 의사코드
// fs모듈을 사용하여 입력받은 세 수를 변수 A,B,C에 할당해줍니다.
// 임의의 변수 hours, minutes 선언해줍니다.
// C/60 의 값을 hours에 할당 C%60 의 값을 minutes에 할당합니다.

// B+minutes >= 60 && A + hours +1 >= 24 인 경우 `${(A + hours +1) - 24} ${(B + minutes) - 60}` 출력합니다.
// B+minutes >= 60 && A + hours +1 >= 24 아닌 경우 `${A + hours +1} ${(B + minutes) - 60}`를 출력합니다.

// B+minutes < 60 && A + hours >= 24 인 경우 `${A + hours - 24} ${B + minutes}` 출력합니다.
// B+minutes < 60 && A + hours >= 24 아닌 경우 `${A + hours} ${B + minutes}` 출력합니다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = ["23 48", "25"];

const A = Number(input[0].split(" ")[0]);
const B = Number(input[0].split(" ")[1]);
const C = Number(input[1]);

const hours = parseInt(C / 60);
const minutes = parseInt(C % 60);

if (B + minutes >= 60) {
  A + hours + 1 >= 24
    ? console.log(`${A + hours + 1 - 24} ${B + minutes - 60}`)
    : console.log(`${A + hours + 1} ${B + minutes - 60}`);
} else {
  A + hours >= 24
    ? console.log(`${A + hours - 24} ${B + minutes}`)
    : console.log(`${A + hours} ${B + minutes}`);
}
