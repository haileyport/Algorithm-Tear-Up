//[PGS] 푸드 파이트 대회 , +1

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.7MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.6MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.6MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.6MB)
// 테스트 15 〉	통과 (0.06ms, 33.6MB)
// 테스트 16 〉	통과 (0.06ms, 33.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.5MB)
// 테스트 18 〉	통과 (0.08ms, 33.5MB)
// 테스트 19 〉	통과 (0.06ms, 33.5MB)
// 테스트 20 〉	통과 (0.06ms, 33.6MB)

function solution(food) {
  let result = [];
  
  food.slice(1).map((el,i) => {
      let amount = Math.floor(el / 2);
      
      if(amount) result.push(`${i+1}`.repeat(amount));
  })
  
  return result.join('')+'0'+result.reverse().join('');
}