const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = +input[0];

function solution(num) {
  // 재귀함수가 뭔가요 ?

  const underBar = '____';
  const line_break = '\n';

  // 반복되지 않는 부분 앞 부분
  const firstLine = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`;
  const lastLineAnswer = `"재귀함수는 자기 자신을 호출하는 함수라네"`;

  // 반복되는 부분

  const question = `"재귀함수가 뭔가요?"`;

  // 시작부분

  // forLoop 사용해 문제 풀기

  // 첫번째 firstLine 을 제외한 마지막 문장은 lastLineAnswer을 출력
  // 2번째 반복부터 문장앞에 언더바를 붙여줘야함

  let finalMessage = '';

  for (let i = 1; i <= num; i++) {
    const answer = `${underBar.repeat(i - 1)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.${line_break}${underBar.repeat(
      i - 1
    )}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.${line_break}${underBar.repeat(
      i - 1
    )}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;

    const defaultMessage = `${firstLine}${line_break}${question}${line_break}${answer}`;

    finalMessage = `${defaultMessage}${line_break}${underBar.repeat(i)}${question}`;

    console.log(finalMessage);
  }
}

solution(input);
