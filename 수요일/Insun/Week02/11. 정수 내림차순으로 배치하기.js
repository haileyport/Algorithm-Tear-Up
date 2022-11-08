function solution(n) {
  // n을 자릿수별로 한자리씩 나누기
  let splited = String(n).split("");
  // 큰 수부터 작은 수로 정렬하기
  let sorted = splited.map(Number).sort((a, b) => b - a);
  // 다시 수로 만들어 리턴
  let result = "";
  for (let i = 0; i < sorted.length; i++) {
    result += sorted[i];
  }
  return +result;
}
