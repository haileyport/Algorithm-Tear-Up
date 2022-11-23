function solution(n) {
  //n의 인덱스가 홀수면 수, 짝수면 박으로 입력해주기
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += "박";
    } else if (i % 2 === 1) {
      result += "수";
    }
  }
  return result;
}
