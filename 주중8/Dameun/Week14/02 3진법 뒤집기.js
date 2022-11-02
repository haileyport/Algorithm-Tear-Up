function solution(n) {
  let result = String(n.toString(3)).split("").reverse().join("");
  return parseInt(result, 3);
}

// function solution(n) {
//     let result = String(n.toString(3)).split("").reverse().join("")*1;
//     return parseInt(result, 3);
//   }
//위처럼 하니까 통과가 되지 않았다. Number로 바꾸니 문제가 생긴다 왜..?
//https://stackoverflow.com/questions/38372658/why-does-javascript-number-function-return-wrong-value-for-this-number

//5분내
//2점

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.6MB)
