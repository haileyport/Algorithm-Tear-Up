function solution(n) {
  //n이 양의 정수 x제곱 -> x+1의 제곱 리턴
  // 아니면 -> -1을 리턴
  const x = Math.sqrt(n);
  if (x % 1 === 0) {
    return (x + 1) * (x + 1);
  } else {
    return -1;
  }
}
