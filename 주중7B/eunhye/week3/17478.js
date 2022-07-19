//재귀함수가 뭔가요?

//askRepeat변수에서 deep copy가 이루어지지 않아서,
//반복문이 정상적으로 실행되지 않고 있음.

const fs = require("fs");
const input = fs.readFileSync("./text.txt").toString();

//멘트를 한 줄씩 나눠서 필요한 부분만 추출
const arrMent = (ment, a, b) => {
  const arr = ment.split("\n");
  ment = arr.slice(a, b);
  return ment;
};

//배열을 string으로
const mergeArr = (ment) => {
  const ans = ment.join("&").replace(/&/g, "\n");
  return ans;
};

//반복
const askRepeat = (ment, k, i = 1) => {
  const original = [...ment]; //deep copy???
  if (i === k) {
    return mergeArr(ment);
  } else {
    original.forEach((e) => {
      ment.push(`${"____".repeat(i)}${e}`);
    });
    return askRepeat(original, k, (i += 1));
  }
};

//첫번째 반복문 실행
const midRept = (ment, k) => {
  const askConv = arrMent(ment, 1, 5);
  return askRepeat(askConv, k);
};

//챗봇 맺음부 멘트 반복
const endRepeat = (ment, k, ans = "") => {
  if (k < 0) {
    return ans;
  } else {
    ans += `${"____".repeat(k)}${ment}\n`;
  }
  return endRepeat(ment, k - 1, ans);
};

//맺음부 반복문 실행
const endRept = (ment, k) => {
  const endConv = arrMent(ment, 6);
  return endRepeat(endConv, k);
};

//답안
const answer = (ment, k) => {
  const fixMent = arrMent(ment, 0, 1);
  const ansMent = `${"____".repeat(k)}${arrMent(ment, 1, 2)}\n${"____".repeat(
    k
  )}${arrMent(ment, 5, 6)}`;
  const res = `${fixMent}\n${midRept(ment, k)}\n${ansMent}\n${endRept(
    ment,
    k
  )}\n`;
  console.log(res);
  return res;
};

//주어진 문자열
const ment = `어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
"재귀함수가 뭔가요?"
"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
"재귀함수는 자기 자신을 호출하는 함수라네"
라고 답변하였지.`;

const ans = answer(ment, Number(input));
