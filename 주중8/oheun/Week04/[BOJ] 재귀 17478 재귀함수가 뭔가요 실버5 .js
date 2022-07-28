/*
통과 여부 : 통과
시간 복잡도 : 148 ms
공간 복잡도 : 10188 KB

[17478번 재귀함수가 뭔가요? / 실버 5]
M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

input : 교수님이 출력을 원하는 재귀 횟수 N(1 ≤ N ≤ 50)
output : 재귀 횟수에 따른 챗봇의 응답을 출력

[개념 잡기]
- 재귀 : 자기자신 호출

[의사코드]
0. 입력 받기 & 변수 선언
    - 입력은 재귀를 의미하는 recursion
    - 재귀 횟수를 의미하는 cnt
1. 첫 줄 출력
2. underbar 생성 함수
    - 라고 답변하겠지에서 반복문을 사용하지 않고자
3. chatbot 함수
    - input과 재귀 호출 횟수가 같아지면 라고 답변하겠지 출력
    - line 함수 이용하기

[틀린 이유]
- 어...왜 틀렸지?????? => 재귀함수는 자기 자신을 호출하는 함수라네에 따옴표 X였음.
 */


//0. 입력 받기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let recursion = Number(input);
//let recursion = 4;

console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

function line(cnt) {
    let underbar = '';
    for (let i = 0; i < cnt * 4; i++) { // 호출횟수에 따라 underbar 증가
        underbar += '_';
    }
    return underbar;
}

function chatbot(recursion, cnt) {

    underbar = line(cnt);
    if (cnt === recursion) { // 입력과 횟수가 같아지면
        console.log(underbar + `"재귀함수가 뭔가요?"`);
        console.log(underbar + `"재귀함수는 자기 자신을 호출하는 함수라네"`);

        // 반복이 끝나고 돌아오게 되면 step 2->1->0으로 줄어들면서 출력하기
        for (let i = cnt; i >= 0; i--) {
            underbar = line(i);
            console.log(underbar + '라고 답변하였지.');
        }
        return 1;
    } else if (cnt < recursion) {
        console.log(underbar + `"재귀함수가 뭔가요?"`);
        console.log(underbar + `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`)
        console.log(underbar + "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.")
        console.log(underbar + `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`)

        return chatbot(recursion, cnt + 1);
    }
}

chatbot(recursion, 0);