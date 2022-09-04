// memory : 9332KB
// time : 124ms
// 풀이시간 : 20분


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// check.1 : 첫줄은 현재시간
// check.2 : 둘째줄은 요리시간
// 출력 : 요리 완성 시간

// 1. 현재시간을 담을 변수 getTime에 첫째줄을 공백을 기준으로 할당
// 2. getTime의 1번째 값에(분) input의 두번째 줄의 값 (요리시간) 더하기
// 3. 만약, 분이 60이상이라면
    // 3-1. adder는 분 / 60
    // 3-1. getTiem의 1번재 값은 분 % 60

// 4. getTime의 0번째 값 + adder
// 5. 만약, getTime의 0번째 값이 24 이상이라면
    // 5-1. getTime의 0번째 값은 getTime[0]-24

// 6. getTime 출력

let getTime = input[0].split(' ').map((el) => +el);
let adder = 0;

const cookingDuration = parseInt(input[1]);

getTime[1] = getTime[1] + cookingDuration;

if (getTime[1] >= 60){
    adder = Math.floor(getTime[1] / 60); // 반드시 floor를 해줘야됨. -> 안하면 실수형 (소수점 겁나 나옴)
    // console.log(adder);

    getTime[1] = getTime[1] % 60;
}

getTime[0] = getTime[0] + adder;

if (getTime[0] >= 24){
    getTime[0] = getTime[0] - 24;
}

console.log(getTime.join(' ')) // 배열 타입이라서 실패 -> join으로 문자열로 출력

