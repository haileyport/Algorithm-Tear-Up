//[PGS] 완주하지 못한 선수, +5

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.42ms, 33.6MB)
// 테스트 4 〉	통과 (0.58ms, 33.8MB)
// 테스트 5 〉	통과 (0.93ms, 33.8MB)
// 효율성  테스트
// 테스트 1 〉	통과 (30.75ms, 57.6MB)
// 테스트 2 〉	통과 (41.03ms, 60.4MB)
// 테스트 3 〉	통과 (41.55ms, 65.3MB)
// 테스트 4 〉	통과 (64.87ms, 71MB)
// 테스트 5 〉	통과 (63.78ms, 71.4MB)

function solution(participant, completion) {
  const participants = {}
  
  for(let i of participant){
      participants.hasOwnProperty(i) ?  participants[i] += 1 : participants[i] = 1;
  }
  
  for(let i of completion){
      participants[i]--;
  }
  
  for(let i in participants){
      if (participants[i]) return i
  }
}