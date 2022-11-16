// 챗봇의 응답을 출력

const input = Number(require("fs").readFileSync("../ex.txt").toString().trim());

let result = "";

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

function chatbot(line, currentNum) {
  // currentNum이 input이 아니면 (input 전까지)
  if (input !== currentNum) {
    result += `${line}"재귀함수가 뭔가요?"
${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
`;

    currentNum++;

    chatbot(line + "____", currentNum);
    // currentNum이 input이면
  } else {
    result += `${line}"재귀함수가 뭔가요?"
${line}"재귀함수는 자기 자신을 호출하는 함수라네"
`;
  }
  // 왜 축적됐을까?
  result += `${line}라고 답변하였지.
`;
}

chatbot("", 0);

console.log(result);

// 참고 https://velog.io/@dlsgkrdl23/JavaScript-17478-%EB%B0%B1%EC%A4%80
