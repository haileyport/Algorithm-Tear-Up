//[PGS] 모의고사, +2

// 테스트 1 〉	통과 (0.15ms, 32.4MB)
// 테스트 2 〉	통과 (0.16ms, 32.7MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.13ms, 33.5MB)
// 테스트 6 〉	통과 (0.13ms, 33.5MB)
// 테스트 7 〉	통과 (1.40ms, 36.6MB)
// 테스트 8 〉	통과 (0.71ms, 32.4MB)
// 테스트 9 〉	통과 (1.85ms, 35.9MB)
// 테스트 10 〉	통과 (1.29ms, 36.6MB)
// 테스트 11 〉	통과 (2.06ms, 37.2MB)
// 테스트 12 〉	통과 (1.84ms, 35.7MB)
// 테스트 13 〉	통과 (0.24ms, 33.6MB)
// 테스트 14 〉	통과 (2.26ms, 37.1MB)

function solution(answers) {
  let len = answers.length; 
  let giveUp = ["12345",'21232425','3311224455'];
  let arr = [];
  
  for(let i = 0; i < giveUp.length; i++){
      let count = 0;
      
      if(len > giveUp[i].length){
          let gap = Math.ceil(len / giveUp[i].length);
          giveUp[i] = giveUp[i].repeat(gap);
      }
      
      answers.map((el,idx) => {
          if(el == giveUp[i][idx]) count++;
      })
      
      arr.push(count);
  }
  
  let max = Math.max(...arr);
  let result = [];
  
  arr.map((el, i) => {
      if(el === max){
          result.push(i+1);
      }
  } )
  
  return result;
}