//[PGS] 숫자 짝꿍, +12 😎😎😎😎😎 찢었다...

// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.4MB)
// 테스트 6 〉	통과 (0.46ms, 33.5MB)
// 테스트 7 〉	통과 (0.37ms, 33.6MB)
// 테스트 8 〉	통과 (0.45ms, 33.5MB)
// 테스트 9 〉	통과 (0.35ms, 33.5MB)
// 테스트 10 〉	통과 (0.42ms, 33.5MB)
// 테스트 11 〉	통과 (534.43ms, 192MB)
// 테스트 12 〉	통과 (567.72ms, 198MB)
// 테스트 13 〉	통과 (590.77ms, 199MB)
// 테스트 14 〉	통과 (554.77ms, 199MB)
// 테스트 15 〉	통과 (557.89ms, 198MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	통과 (0.11ms, 33.4MB)
// 테스트 18 〉	통과 (0.10ms, 33.4MB)
// 테스트 19 〉	통과 (0.10ms, 33.4MB)

function solution(X, Y) {
  let result = '';
  const objX = {};
  const objY = {};
  
  for(let x of X){
      if(objX.hasOwnProperty(x)) objX[x]++; 
      else objX[x] = 1;
  }
  
  for(let y of Y){
      if(objY.hasOwnProperty(y)) objY[y]++; 
      else objY[y] = 1;
  }
  
  for(let i in objX){
      if(objY.hasOwnProperty(i)){
          if(objX[i] === objY[i]) result += i.repeat(objX[i]);
          else {
              let min  = Math.min(objX[i], objY[i]);
              result += i.repeat(min);
          }
      }
  }
  
  let sorted = [...result].sort((a,b) => b - a).join('')

  if(sorted.length === 0) return '-1';
  else if(sorted[0] === 0) return '0';
  else return sorted
}
