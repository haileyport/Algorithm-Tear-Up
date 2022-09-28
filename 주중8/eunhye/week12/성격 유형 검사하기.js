function solution(survey, choices) {
  let answer = "";

  // survey의 첫번째 원소는 질문의 비동의
  // 두번째 원소는 질문의 동의

  // choices 값이 1~3이면 비동의
  // 4 중립
  // 5~7 동의

  // R/T | C/F | J/M | A/N

  // 7점 드러운 내 코드 리팩토링 하기

  const types = ["RT", "CF", "JM", "AN"];

  const mbti = {};

  types.forEach((el) => {
    el.split("").forEach((char) => (mbti[char] = 0));
  });

  choices.forEach((el, idx) => {
    const [disagree, agree] = survey[idx];
    mbti[el > 4 ? agree : disagree] += Math.abs(el - 4);
  });

  return types.map(([a, b]) => (mbti[b] > mbti[a] ? b : a)).join("");
}
