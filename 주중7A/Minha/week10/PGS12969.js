function solution(n, m) {
  var answer = [];
  let max = Math.max(n, m), min = Math.min(n, m);

  //GCD 
  const gcd = (a, b) => {
    if (b === 0) return a;
    if (a % b === 0) return b;
    else return gcd(b, a % b); // a % b와 b를 비교하면 b가 더 크니까 b, a % b 순으로
  }
  answer.push(gcd(max, min));

  //LCM 
  const lcm = (a, b) => {
    return Math.abs(a * b) / answer[0];
  }
  answer.push(lcm(max, min));
  return answer;
}
