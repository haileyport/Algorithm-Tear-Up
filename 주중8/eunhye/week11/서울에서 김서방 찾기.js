// 1점 풀이 ~
// function solution(seoul) {
//     let answer = '';
//     seoul.forEach((el, idx) => {
//         if(el === 'Kim') {
//             answer = `김서방은 ${idx}에 있다`
//             return;
//         }
//     })
//     return answer;
// }

// 근데 다시 생각해보니까 한 번만 나오는데 굳이 여러번 김서방을 찾을 필요가 없어서 indexOf로 코드를 바꿨다
// 이 코드가 조금 더 빠르당
function solution(seoul) {
  let answer = "";
  const idx = seoul.indexOf("Kim");
  answer = `김서방은 ${idx}에 있다`;
  return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)
// 테스트 12 〉	통과 (0.03ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.5MB)
// 테스트 14 〉	통과 (0.03ms, 33.4MB)
