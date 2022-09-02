function solution(n, m) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  let commonFactor; 
  for (let i = min; i > 0; i--) { 
      if (n % i === 0 && m % i === 0) {
          commonFactor = i;
          break;
      }
  }
  
  let commonMultiple; 
  for (let i = max; i > 0; i++) {
      if (i % n === 0 && i % m === 0) {
          commonMultiple = i;
          break;
      }
  }
  
  let answer = [commonFactor, commonMultiple];
  return answer;
}