//[PGS] 없는 숫자 더하기, +1
// 소요시간 : 6.04분

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)

function solution(numbers) {
  let result = 0;
  
  let i = 9;
  while(i >= 0){
      if(!numbers.includes(i)) result += i;
      i--;
  }
  
  return result;
}

