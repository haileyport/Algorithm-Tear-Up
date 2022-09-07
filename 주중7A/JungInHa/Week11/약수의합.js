function solution(n) {
  var answer = n;
  
  for (let i = 1; i <= n/2; i++) {
      if (n % i === 0) answer += i;
  }
  
  return answer;
}