//[PGS] 삼총사, +1

// 테스트 1 〉	통과 (0.28ms, 33.6MB)
// 테스트 2 〉	통과 (0.18ms, 33.4MB)
// 테스트 3 〉	통과 (0.20ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.4MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.26ms, 33.4MB)
// 테스트 7 〉	통과 (0.28ms, 33.5MB)
// 테스트 8 〉	통과 (0.28ms, 33.6MB)
// 테스트 9 〉	통과 (0.27ms, 33.6MB)
// 테스트 10 〉	통과 (0.29ms, 33.5MB)
// 테스트 11 〉	통과 (0.22ms, 33.4MB)
// 테스트 12 〉	통과 (0.25ms, 33.4MB)
// 테스트 13 〉	통과 (0.23ms, 33.4MB)

function solution(number) {
  let result = 0;
  
  const combi = (arr,idx) => { //재귀함수 생성 
      if(arr.length === 3){
          result += arr.reduce((acc,curr) => acc + curr, 0) === 0 ? 1 : 0; // 세 요소의 합이 0이면 result 증감
          return; 
      }
      
      for(let i = idx; i < number.length; i++){
          combi([...arr, number[i]], i+1);
      }
      
  }
  
  combi([], 0);
  
  return result;
}