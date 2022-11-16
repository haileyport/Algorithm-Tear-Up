//[PGS] 콜라 문제, +8

// 테스트 1 〉	통과 (0.11ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.17ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (1.52ms, 33.9MB)
// 테스트 13 〉	통과 (0.04ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)

function solution(a, b, n) {
  let result = 0;  
  
  if(n < a) return result;
    
    let gotten = Math.floor(n / a) * b;
    let left = n % a;
        
    if(n % a === 0){
         result += gotten + solution(a, b, gotten);
    }else {
        n = gotten + left
         result += gotten + solution(a, b, n);
    }
    
    return result;
}