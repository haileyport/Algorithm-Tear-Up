//[PGS] 올바른 괄호 , +6

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.6MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.17ms, 33.5MB)
// 테스트 13 〉	통과 (0.22ms, 33.6MB)
// 테스트 14 〉	통과 (0.17ms, 33.5MB)
// 테스트 15 〉	통과 (0.18ms, 33.4MB)
// 테스트 16 〉	통과 (0.18ms, 33.4MB)
// 테스트 17 〉	통과 (0.13ms, 33.5MB)
// 테스트 18 〉	통과 (0.13ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (4.72ms, 37.9MB)
// 테스트 2 〉	통과 (4.43ms, 37.9MB)

function solution(s){
  let bracket = [...s];
  
  let left = 0;
  
  if(bracket[0] === ')' ) return false;
  
  for(let i = 0; i < bracket.length; i++){
      if(bracket[i] === ')' && left === 0) return false;
      else if(bracket[i] === ')' && left !== 0) left--;
      else if(bracket[i] === '(') left++;
  }
  
  return left !== 0 ? false : true;
  
}