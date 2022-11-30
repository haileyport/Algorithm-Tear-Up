function solution(n, m) {
  let answer = [];

  let gcd = 0; // 최대공약수
  let lcm = 0; // 최소공배수

  let num = n > m ? n : m;

  // 최대공약수 구하기
  for (let i = 1; i <= num; i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  // 최소공배수 구하기
  // 두 수의 곱 = 최소공약수 * 최소공배수
  //n*m = gcd*lcm
  lcm = (n * m) / gcd;
  answer = [gcd, lcm];
  return answer;
}
