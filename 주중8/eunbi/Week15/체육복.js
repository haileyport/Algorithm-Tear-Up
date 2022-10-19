//[PGS] 체육복, +9
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.14ms, 33.6MB)
// 테스트 3 〉	통과 (0.09ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.6MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
// 테스트 8 〉	통과 (0.09ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.17ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.6MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)
// 테스트 13 〉	통과 (0.08ms, 33.4MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 테스트 15 〉	통과 (0.08ms, 33.4MB)
// 테스트 16 〉	통과 (0.08ms, 33.4MB)
// 테스트 17 〉	통과 (0.08ms, 33.5MB)
// 테스트 18 〉	통과 (0.08ms, 33.5MB)
// 테스트 19 〉	통과 (0.08ms, 33.6MB)
// 테스트 20 〉	통과 (0.08ms, 33.6MB)

function solution(n, lost, reserve) {
  // 본인이 체육복 여벌도 가지면서 도난당한 경우 
  // 정렬 진행함으로써 먼저 빌린 학생번호 제외시키기 
  
  let lostAmount = lost.length; 
  let count = 0; // 체육복을 빌린 수 저장 
  
  // 정렬시키기 
  lost.sort((a,b) => a - b)
  reserve.sort((a,b) => a - b)
  
  for(let j = 0; j < lost.length; j++){
      if(reserve.includes(lost[j])){
          count++;
          reserve.splice(reserve.indexOf(lost[j]), 1);
          lost.splice(j, 1);
          j--; // lost splice 진행으로 인해 인덱스에 변화가 생겨 j--를 해줌으로써 인덱스를 맞춰줬어야했다...! 
      }
  }
                      
  for(let i = 0; i < lost.length; i++){
      if(reserve.includes(lost[i]-1)) { // -1 작은 수 존재하는 경우 
          count++;
          reserve.splice(reserve.indexOf(lost[i]-1), 1);
      }else if(reserve.includes(lost[i]+1)) {
          count++;
          reserve.splice(reserve.indexOf(lost[i]+1), 1);
      }
  }
  
  return n - lostAmount + count;
}