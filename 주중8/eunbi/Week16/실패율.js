//[PGS] 최소직사각형, +9 
// 요령없이 푼듯하다 ㅠ -> 어마무시한 시간복잡도...

// 테스트 1 〉	통과 (0.20ms, 33.6MB)
// 테스트 2 〉	통과 (0.78ms, 33.5MB)
// 테스트 3 〉	통과 (103.76ms, 36.7MB)
// 테스트 4 〉	통과 (602.45ms, 41.7MB)
// 테스트 5 〉	통과 (1993.03ms, 46.8MB)
// 테스트 6 〉	통과 (3.00ms, 36.1MB)
// 테스트 7 〉	통과 (36.44ms, 36.8MB)
// 테스트 8 〉	통과 (497.83ms, 41.6MB)
// 테스트 9 〉	통과 (2272.90ms, 46.6MB)
// 테스트 10 〉	통과 (234.69ms, 41.5MB)
// 테스트 11 〉	통과 (501.51ms, 41.6MB)
// 테스트 12 〉	통과 (329.76ms, 42.3MB)
// 테스트 13 〉	통과 (781.62ms, 43MB)
// 테스트 14 〉	통과 (0.28ms, 33.5MB)
// 테스트 15 〉	통과 (29.58ms, 39.5MB)
// 테스트 16 〉	통과 (15.62ms, 37.7MB)
// 테스트 17 〉	통과 (31.09ms, 39.4MB)
// 테스트 18 〉	통과 (25.00ms, 38MB)
// 테스트 19 〉	통과 (5.42ms, 36.2MB)
// 테스트 20 〉	통과 (31.24ms, 39.8MB)
// 테스트 21 〉	통과 (43.60ms, 40.1MB)
// 테스트 22 〉	통과 (2033.16ms, 43.2MB)
// 테스트 23 〉	통과 (47.53ms, 44.2MB)
// 테스트 24 〉	통과 (122.34ms, 44.5MB)
// 테스트 25 〉	통과 (0.11ms, 33.5MB)
// 테스트 26 〉	통과 (0.09ms, 33.4MB)
// 테스트 27 〉	통과 (0.10ms, 33.4MB)

function solution(N, stages) {
  let status = stages.slice().sort((a,b) => a - b);
  let ratio = [];
  
  for(let i = 0; i < N; i++){
      let stage = i+1;
      let total = 0; 
      let failure  = 0; 
      
      status.map(el => {
          if(el >= stage){
              if(el === stage){
                  failure++; 
              }
              total++; 
          }
      })
      
      if(total === 0) ratio[i] = 0;
      else ratio[i] = failure/total; 
  }
  
  let copyRatio = ratio.slice().sort((a, b) => b - a);
  
  return copyRatio.map(el => {
      let idx = ratio.indexOf(el);
      ratio[idx] = '';
      return idx+1;
  })
  
}
