//[PGS] K번째 수, +1

// 테스트 1 〉	통과 (0.10ms, 33.6MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.5MB)

function solution(array, commands) {
  return commands.map(el => {
      let arr = array.slice(el[0]-1, el[1]);
      return (arr.sort((a,b) =>  a - b))[el[2]-1];
  })
}