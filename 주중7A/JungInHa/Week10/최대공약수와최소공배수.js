function solution(n, m) {
    const min = Math.min(n, m);
    
    let commonFactor; 
    for (let i = min; i > 0; i--) { 
        if (n % i === 0 && m % i === 0) {
            commonFactor = i;
            break;
        }
    }
    
    let commonMultiple = n * m / commonFactor;
    
    let answer = [commonFactor, commonMultiple];
    return answer;
  }