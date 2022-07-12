// 통과
/* 0710 

문제 : 2480번 주사위 세개
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 
또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 
3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

input : 3개의 눈(1~6), 정수
output : 상금
*/

// 입출력 처리
// 공백으로 구분된 한 줄의 값들을 입력 받을 때
const fs = require('fs');
// /dev/stdin을 적용해 stdin 파일을 비동기적으로 불러와 처리하는 것
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const first = Number(input[0]);
const second = Number(input[1]);
const third = Number(input[2]);
let result = 0;
let max = first;

// 1트) 틀린 이유 : 2 2 2가 같은 눈 3개가 아닌 2개인 경우로 계산되고 있음.
// 2트) 답은 맞게 나오는데 왜 틀리지?
if (first === second && second === third && first=== third){// 같은 눈이 3개 나오면 10000 + 같은 눈 X 1000
    result = 10000 + (first*1000);
} else if (first === second || second === third) {// 같은 눈이 2개만 나오면 1000+ 같은 눈 X100
    result = 1000+second*100;
} else if (first === third)  {// 같은 눈이 2개만 나오면 1000+ 같은 눈 X100
    result = 1000 + first*100;
}else {// 모두 다르면 가장 큰 눈 X 100
    // 3트) 틀린 이유 : else에서 각 if문 안에 result 계산값이 들어가지 않았음.
    if(second > third){ // 2번째가 3번째보다 크다면
        if (second > max){
            max = second;
            result = max*100;
        }
    }else{
        if (third > max){
            max = third;
            result = max*100;
    }
    result = max*100;
}
}
console.log(result);

