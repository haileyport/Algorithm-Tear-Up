function solution(absolutes, signs) {
  // absolutes 배열에 signs 배열을 반영
  // signs 배열에서 true는 +, false는 -를 말한다.
  // 일단 signs 배열의 boolean 요소를 +1 또는 -1로 바꿔주고,
  // absolutes 배열의 각 요소에 곱한 다음
  // result에 다 더해서 최종 값을 구하면 되지않을까?
  let newSigns = signs.map((el) => (el === true ? 1 : -1));

  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    result += absolutes[i] * newSigns[i];
  }

  return result;
}
