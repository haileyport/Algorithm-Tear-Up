// function solution(arr, divisor) {
//     let answer = [];

//     arr.forEach(el => {
//         if(el%divisor === 0) {
//             answer.push(el);
//         }
//     })
//     if(answer.length === 0) {
//         answer.push(-1);
//     } else {
//         answer.sort((a,b) => a-b);
//     }
//     return answer;
// }

function solution(arr, divisor) {
  let answer = [];

  answer = arr.filter((el) => el % divisor === 0);
  answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
  return answer;
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.11ms, 33.5MB)
// 테스트 6 〉	통과 (22.93ms, 36.7MB)
// 테스트 7 〉	통과 (0.15ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.12ms, 33.6MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.09ms, 33.4MB)
// 테스트 13 〉	통과 (0.20ms, 33.7MB)
// 테스트 14 〉	통과 (0.15ms, 33.5MB)
// 테스트 15 〉	통과 (0.14ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.5MB)
