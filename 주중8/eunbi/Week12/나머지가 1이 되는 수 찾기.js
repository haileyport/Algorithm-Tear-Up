//[PGS] 나머지가 1이 되는 수 찾기, +2
// 소요시간 : 6.01 분

// n을 나누었을 때 1이 남아야하니 n-1을 나누었을 때 나누어 떨어지는 수 찾기!
function solution(n) { 
    for(let i = 2; i < n; i++){
      if((n - 1) % i === 0) return i;
  }
}