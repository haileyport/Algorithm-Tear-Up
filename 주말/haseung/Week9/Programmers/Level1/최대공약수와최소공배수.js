function solution(n, m) {
  //수를 담기 위한 배열 필요
  // 최대공약수 - n,m에 대해서 n을 m으로 나눈 나머지가 r이라 하면(n>m), n과 m의 최대공약수는 m과 r의 최대공약수 와 같다.
  // 반복적으로 m을 r로 나눈 나머지 l을 구하는 과정을 반복해서 나머지가 0이 되었을 때 나누는 수가 n,m의 최대공약수

  // 최소공배수 n*m/최대공약수

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(2, 5));
