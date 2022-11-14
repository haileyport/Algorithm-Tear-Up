/* 
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.5MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.6MB)
테스트 12 〉	통과 (0.18ms, 33.6MB)
테스트 13 〉	통과 (0.12ms, 33.5MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
테스트 15 〉	통과 (0.14ms, 33.5MB)
테스트 16 〉	통과 (0.12ms, 33.5MB)
테스트 17 〉	통과 (0.18ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (2.97ms, 37MB)
테스트 2 〉	통과 (2.98ms, 37MB)
*/

/* eslint-disable */
// 줌 키고하면 효율성에서 실패뜸
function solution(s) {
  if (s[0] === ")") return false;
  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack++;
    else if (s[i] === ")" && stack > 0) stack--;
    else if (s[i] === ")" && stack <= 0) return false;
  }
  return stack ? false : true;
}

// function solution(s) {
//   if (s[0] === ")") return false;
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") stack.push(s[i]);
//     else if (s[i] === ")" && stack[stack.length-1] === "(") stack.pop();
//     else if (stack.length === 0 && s[i] === ")" ) return false;
//   }
//   return stack.length ? false : true
// }