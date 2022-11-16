/*
통과 여부 : 통과
시간 : 3분
점수 : +2

*/
function solution(s) {
  let newArr = s.split(" ").sort((a, b) => a-b);
  let result =  [newArr[0], newArr[newArr.length-1]];
  return result.join(' ');
}
/*
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.10ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.13ms, 33.5MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.07ms, 33.5MB)
테스트 8 〉	통과 (0.07ms, 33.5MB)
테스트 9 〉	통과 (0.07ms, 33.5MB)
테스트 10 〉	통과 (0.15ms, 33.4MB)
테스트 11 〉	통과 (0.09ms, 33.4MB)
테스트 12 〉	통과 (0.11ms, 33.4MB)
*/

function solution(s) {
  let answer = s.split(' ').sort((a, b)=> a-b);
  return answer[0] +' '+ answer[answer.length-1];
}

/*
테스트 1 〉	통과 (0.07ms, 33.6MB)
테스트 2 〉	통과 (0.09ms, 33.7MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.6MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.6MB)
테스트 7 〉	통과 (0.05ms, 33.6MB)
테스트 8 〉	통과 (0.07ms, 33.6MB)
테스트 9 〉	통과 (0.07ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.8MB)
테스트 11 〉	통과 (0.05ms, 33.7MB)
테스트 12 〉	통과 (0.10ms, 33.5MB)
*/