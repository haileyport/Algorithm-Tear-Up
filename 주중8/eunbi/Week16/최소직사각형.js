//[PGS] 최소직사각형, +1

// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.6MB)
// 테스트 5 〉	통과 (0.25ms, 33.5MB)
// 테스트 6 〉	통과 (0.18ms, 33.5MB)
// 테스트 7 〉	통과 (0.28ms, 33.4MB)
// 테스트 8 〉	통과 (0.20ms, 33.4MB)
// 테스트 9 〉	통과 (0.22ms, 33.5MB)
// 테스트 10 〉	통과 (0.26ms, 33.4MB)
// 테스트 11 〉	통과 (0.32ms, 33.5MB)
// 테스트 12 〉	통과 (0.34ms, 33.5MB)
// 테스트 13 〉	통과 (1.33ms, 33.8MB)
// 테스트 14 〉	통과 (1.55ms, 34MB)
// 테스트 15 〉	통과 (3.63ms, 34.2MB)
// 테스트 16 〉	통과 (7.39ms, 35MB)
// 테스트 17 〉	통과 (10.65ms, 37.8MB)
// 테스트 18 〉	통과 (8.39ms, 38.5MB)
// 테스트 19 〉	통과 (34.07ms, 38MB)
// 테스트 20 〉	통과 (50.53ms, 39.6MB)

function solution(sizes) {
  const nums = [];
  let max = 0; 
  let min = 0; 
  
sizes.map(el => { el.map(item => {
    if(!nums.includes(item)) nums.push(item);    
}) })
  
  nums.sort((a,b) => a - b);
  
  max = Math.max(...nums);
  

  for(let i = 0; i < sizes.length; i++){
      min = nums[0];
      let mini = Math.min(...sizes[i]);
      
      if(min < mini){
          nums.splice(0, 1);
          i--;
      } 
  }
  
  return max * nums[0]
}