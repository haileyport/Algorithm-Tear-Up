//[PGS] 카펫, +2

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.15ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.18ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.4MB)
// 테스트 9 〉	통과 (0.17ms, 33.4MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)

function solution(brown, yellow) {
  let sqrt = Math.floor(Math.sqrt(yellow));
  let divisor = [];
  let share = [];

  if(sqrt === 1){
      return [yellow+2, 3];
  }
  
  for(let i = 1; i <= sqrt; i++){ // 약수 구하는 로직
      if(yellow % i === 0){
          divisor.push(i); // 나누는 수 
          share.push(Math.floor(yellow / i)); // 몫 
      }
  }
  
  for(let i = 0; i < divisor.length; i++){
      let width = share[i]+2;
      let height = divisor[i];
      let isBrown = (width*2) + (height*2);
      
      if(isBrown === brown) return [width , height+2];
  }

}