function solution(n, m) {
  let answer = [];
  let gcd = 1, gcm = 1; // 최대공약수, 최대공배수
  
  for(let i = 1; i <= Math.min(n, m); i++){
      if(n % i === 0 && m % i === 0) gcd = i;
  }
  
  gcm = gcd * (n / gcd) * (m / gcd);
  
  answer.push(gcd, gcm);
  
  return answer;
}