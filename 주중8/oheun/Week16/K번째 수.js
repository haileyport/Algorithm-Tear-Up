/*
통과 여부 : 통과
시간 : 10분
점수 : +1

테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.11ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
*/

/**
 * 
 * @param {*} array 배열
 * @param {*} commands i, j, k
 * @returns 결과를 배열에 담아
 */
function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    let [i, j, k] = command;

    // 사실 잘라서 볼 필요 없이 i에서 + k더한 인덱스 뽑으면 되지 않나?
    // 는 정렬해야 하네.
    answer.push(array.slice(i-1, j).sort((a, b) => a-b)[k-1]);
  }
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4]	;
let commands = 	[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));