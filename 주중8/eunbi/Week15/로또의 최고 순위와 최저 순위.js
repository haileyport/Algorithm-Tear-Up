//[PGS] 로또의 최고 순위와 최저 순위 , ??
// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.05ms, 33.6MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.6MB)
// 테스트 14 〉	통과 (0.05ms, 33.4MB)
// 테스트 15 〉	통과 (0.07ms, 33.5MB)

function solution(lottos, win_nums) {
  let zero = 0;
  let won = 0;
  
  for(let i of lottos){
      if(i === 0) zero++;
      else if(win_nums.includes(i)) won++; 
  }
  
  if(zero === 0 && won === 0) return [6, 6] // 전부 0이 아니면서 맞지 않는 경우 
  return zero === 6 ? [7-(won+zero), 6-won] : [7-(won+zero), 7-won] 
}