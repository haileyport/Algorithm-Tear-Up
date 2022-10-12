// 7점🐱

function solution(arr) {
  let answer = 0;

  const LCM = (a, b) => {
    const GCD = (n, m) => {
      // a%b 나누어지면 최대 공약수는 더 작은 수임
      // 안 되면 a%b를 다시 나눈다
      // 나누어 질 때까지 수행
      if (m === 0) {
        return n;
      }
      return GCD(m, n % m);
    };
    return (a * b) / GCD(a, b);
  };

  arr.reduce((acc, cur) => {
    answer = LCM(acc, cur);
    return answer;
  });

  return answer;
}

// 테스트 1 〉	통과 (0.08ms, 30.2MB)
// 테스트 2 〉	통과 (0.08ms, 30.2MB)
// 테스트 3 〉	통과 (0.12ms, 30MB)
// 테스트 4 〉	통과 (0.09ms, 30MB)
// 테스트 5 〉	통과 (0.08ms, 30MB)
// 테스트 6 〉	통과 (0.10ms, 30.1MB)
// 테스트 7 〉	통과 (0.17ms, 30.1MB)
// 테스트 8 〉	통과 (0.09ms, 29.8MB)
// 테스트 9 〉	통과 (0.11ms, 30MB)
// 테스트 10 〉	통과 (0.09ms, 30.1MB)
