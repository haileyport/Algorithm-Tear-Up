// 떠나기 전까지도 제자들을 생각하셨던 JH 교수님은 재귀함수가 무엇인지 물어보는 학생들을 위한 작은 선물로 자동 응답 챗봇을 준비하기로 했다.
// JH 교수님이 만들 챗봇의 응답을 출력하는 프로그램을 만들어보자.
// 교수님이 출력을 원하는 재귀 횟수 N(1 ≤ N ≤ 50)이 주어진다.
// 출력 예시를 보고 재귀 횟수에 따른 챗봇의 응답을 출력한다.
// 
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(" ");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

const N = parseInt(input[0]);
let result = []

function chatBot(n) {
  let question = '"재귀함수가 뭔가요?"'
  let story1 = '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.';
  let story2 = '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.';
  let story3 = '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."';
  let answer1 = '"재귀함수는 자기 자신을 호출하는 함수라네"';
  let answer2 = '라고 답변하였지.';
  let bar = '____'.repeat(n - 1);

  if (n === N) {
    result.unshift('____'.repeat(n) + answer1);
    result.unshift('____'.repeat(n) + question);

    result.push('____'.repeat(n) + answer2);
  }
  if (n <= 1) {
    result.unshift(bar + story3);
    result.unshift(bar + story2);
    result.unshift(bar + story1);
    result.unshift(bar + question);
    result.unshift('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.')
    result.push(bar + answer2);

    result = result.join('\n');
    return result;
  } else {
    result.unshift(bar + story3);
    result.unshift(bar + story2);
    result.unshift(bar + story1);
    result.unshift(bar + question);

    result.push(bar + answer2);

    return chatBot(n - 1);
  }
}

console.log(chatBot(N));