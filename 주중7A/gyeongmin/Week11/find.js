function solution(n) {
  if(n === 2) return 1;
// 2부터 n까지의 홀수로 구성된 Set
  const s = new Set();
  for (let i = 3; i <= n; i+=2) {
    s.add(2)
    s.add(i);
  }
  // 2부터 n의 제곱근보다 작은 최대 정수까지 
    for (let j = 2; j < Math.sqrt(n); j++) {
    // Set에 해당 수가 포함되면
    if (s.has(j)) {
      // 그 수를 제외하고 그 수의 배수는 모두 삭제
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
