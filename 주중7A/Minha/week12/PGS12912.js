function solution(a, b) {
  // 가우스 식 활용
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}