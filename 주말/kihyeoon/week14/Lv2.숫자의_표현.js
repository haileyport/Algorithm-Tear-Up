solution(15);

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum >= n) {
        if (sum === n) answer++;
        break;
      }
    }
  }
  return answer;
}

function solution2(num) {
  let answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
