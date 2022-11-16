function solution(n) {
  // n이 x의 제곱인지 확인 -> Math.sqrt()
  // x의 제곱이면 = 정수이면 => x+1의 제곱을 리턴
  // x의 제곱이 아니면 = 정수가 아니면 => -1 리턴
  let x = Math.sqrt(n);
  let result = 0;
  if (Number.isInteger(x)) {
    result = Math.pow(x + 1, 2);
  } else {
    result = -1;
  }
  return result;
}
