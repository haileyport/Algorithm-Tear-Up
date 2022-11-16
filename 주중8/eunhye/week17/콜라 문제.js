function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const left = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += left;
  }
  return answer;
}

//3점!
