//[PGS] 다트게임, +4

// 테스트 1 〉	통과 (0.16ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.21ms, 33.2MB)
// 테스트 4 〉	통과 (0.17ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.16ms, 33.4MB)
// 테스트 9 〉	통과 (0.12ms, 33.4MB)
// 테스트 10 〉	통과 (0.13ms, 33.5MB)
// 테스트 11 〉	통과 (0.11ms, 33.4MB)
// 테스트 12 〉	통과 (0.12ms, 33.4MB)
// 테스트 13 〉	통과 (0.12ms, 33.5MB)
// 테스트 14 〉	통과 (0.16ms, 33.6MB)
// 테스트 15 〉	통과 (0.17ms, 33.4MB)
// 테스트 16 〉	통과 (0.13ms, 33.5MB)
// 테스트 17 〉	통과 (0.17ms, 33.4MB)
// 테스트 18 〉	통과 (0.12ms, 33.4MB)
// 테스트 19 〉	통과 (0.18ms, 33.4MB)
// 테스트 20 〉	통과 (0.18ms, 33.4MB)
// 테스트 21 〉	통과 (0.12ms, 33.4MB)
// 테스트 22 〉	통과 (0.17ms, 33.5MB)
// 테스트 23 〉	통과 (0.11ms, 33.6MB)
// 테스트 24 〉	통과 (0.20ms, 33.4MB)
// 테스트 25 〉	통과 (0.12ms, 33.5MB)
// 테스트 26 〉	통과 (0.17ms, 33.4MB)
// 테스트 27 〉	통과 (0.17ms, 33.4MB)
// 테스트 28 〉	통과 (0.23ms, 33.5MB)
// 테스트 29 〉	통과 (0.18ms, 33.4MB)
// 테스트 30 〉	통과 (0.21ms, 33.2MB)
// 테스트 31 〉	통과 (0.17ms, 33.4MB)
// 테스트 32 〉	통과 (0.17ms, 33.4MB)

function solution(dartResult) {
  const dart = [];
  let temp ='';
  
  [...dartResult].map(el => {
      if(isNaN(el)){
          if(temp !== ''){
              dart.push(temp);
              temp ='';
          }
          dart.push(el);   
      }
      else temp += el; 
  });
  
  const area = {
      'S': 1,
      'D': 2,
      'T': 3,
  }
  
  let result = 0;
  let prev = 0;
  let curr = 0;
  
  dart.map(el => {
      if(!isNaN(el)) {
          result += prev; 
          prev = curr; 
          curr = el; 
      }
      else if(area.hasOwnProperty(el)) {
          curr = Math.pow(curr, area[el])
      }
      else if(el === '*'){
          prev *= 2;
          curr *= 2;
      }
      else if(el === '#'){
          curr *= -1;
      }
  })
  
  return result += prev + curr;
}