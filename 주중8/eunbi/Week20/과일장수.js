//[PGS] 과일장수,+3

// 시간초과 
function solution(k, m, score) {
  let total = 0; 
  
  score.sort((a,b) => b - a);
  
  while(score.length >= m){
      let arr = score.splice(0, m);
      let price = Math.min(...arr) * m;    
      total += price;
  }
  
  return total
}

// 시도2 
// 테스트 1 〉	통과 (0.16ms, 33.6MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (16.07ms, 40MB)
// 테스트 7 〉	통과 (18.18ms, 38MB)
// 테스트 8 〉	통과 (3.16ms, 35.9MB)
// 테스트 9 〉	통과 (18.31ms, 38.2MB)
// 테스트 10 〉	통과 (14.72ms, 39.3MB)
// 테스트 11 〉	통과 (221.27ms, 95MB)
// 테스트 12 〉	통과 (217.09ms, 93.8MB)
// 테스트 13 〉	통과 (235.58ms, 95MB)
// 테스트 14 〉	통과 (252.08ms, 93.8MB)
// 테스트 15 〉	통과 (241.03ms, 94.3MB)
// 테스트 16 〉	통과 (0.06ms, 33.5MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.17ms, 33.4MB)
// 테스트 19 〉	통과 (0.17ms, 33.5MB)
// 테스트 20 〉	통과 (0.17ms, 33.5MB)
// 테스트 21 〉	통과 (0.07ms, 33.4MB)
// 테스트 22 〉	통과 (0.06ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.6MB)
// 테스트 24 〉	통과 (0.10ms, 33.6MB)

function solution(k, m, score) {
  let total = 0; // 사과박스를 판 가격들의 합
  
  score.sort((a,b) => b - a); // 최대 이익을 위해 내림차순 정렬로 가장 높은 값을 받을 수 있도록 한다. 
  
  for(let i = 0; i < score.length; i+=m){
      let arr = score.slice(i, i+m); //m 개만큼 자른 배열을 arr에 저장
      
      if(arr.length >= m){ // arr안의 사과 개수가 팔 수 있는 만큼 존재한다면
          let price = Math.min(...arr) * m;    // 사과박스의 가격을 매기고 
          total += price; // 판 가격을 total에 합해준다. 
      }
  }
  
  return total;
}