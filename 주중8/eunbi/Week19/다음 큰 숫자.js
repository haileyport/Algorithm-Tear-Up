//[PGS]다음 큰 숫자, +2

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.3MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33MB)
// 테스트 5 〉	통과 (0.11ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.3MB)
// 테스트 9 〉	통과 (0.07ms, 33.5MB)
// 테스트 10 〉	통과 (0.07ms, 33.3MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.4MB)
// 테스트 13 〉	통과 (0.07ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.11ms, 32.9MB)
// 테스트 2 〉	통과 (0.09ms, 32.9MB)
// 테스트 3 〉	통과 (0.09ms, 32.9MB)
// 테스트 4 〉	통과 (0.08ms, 33MB)
// 테스트 5 〉	통과 (0.07ms, 32.9MB)
// 테스트 6 〉	통과 (0.09ms, 32.9MB)

function solution(n) {
  let binaryN = n.toString(2);
  let amountOfOne = [...binaryN].filter(el => el === '1').length; 
  
  let i = n+1; 
  while(i > n){
      let binaryI = i.toString(2);
      let amount = [...binaryI].filter(el => el === '1').length; 
      
      if(amount === amountOfOne) return i;
      else i++;
  }
}