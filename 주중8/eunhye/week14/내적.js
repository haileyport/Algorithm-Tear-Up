function solution(a, b) {
  // 내적 = 각 i번째 요소끼리 곱해서 더하는 거

  // a.forEach((el, idx) => {
  //     answer += el * b[idx]
  // })
  return a.reduce((acc, cur, idx) => {
    return (acc += cur * b[idx]);
  }, 0);
}
