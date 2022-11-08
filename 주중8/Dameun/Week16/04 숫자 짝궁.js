// function solution(X, Y) {
//   let xNum = [...X].sort((a, b) => a - b);
//   let yNum = [...Y].sort((a, b) => a - b);
//   let result = [];
//   while (xNum[0] && yNum[0]) {
//     if (xNum[0] === yNum[0]) {
//       result.push(xNum[0]);
//       xNum.shift();
//       yNum.shift();
//       // console.log(result);
//     } else if (xNum[0] > yNum[0]) {
//       yNum.shift();
//     } else {
//       xNum.shift();
//     }
//   }
//   if (result.length === 0) return "-1";
//   if (result[result.length - 1] === "0") return "0";
//   return result.reverse().reduce((a,b) => a+b);
// }

//테스트 10 ~ 15 시간초관
//아마 모든 숫자를 배열로 바꾸는게 문제인듯

function solution(X, Y) {
  let arrX = Array.from({ length: 10 }).fill(0);
  let arrY = Array.from({ length: 10 }).fill(0);
  let result = [];
  for (let n of X) {
    arrX[n * 1]++;
  }
  for (let n of Y) {
    arrY[n * 1]++;
  }
  arrX.map((el, idx) => {
    if (arrY[idx] !== 0 && el >= arrY[idx]) {
      result.push(`${idx}`.repeat(arrY[idx]));
    } else if (el !== 0 && el < arrY[idx]) {
      result.push(`${idx}`.repeat(el));
    }
  });
  if (result.length === 0) return "-1";
  if (result[result.length - 1].includes("0")) return "0";
  return result.reverse().reduce((a, b) => a + b);
}

console.log(solution("100", "203045"));

//11점
//30분
// 테스트 1 〉	통과 (0.11ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.4MB)
// 테스트 4 〉	통과 (0.12ms, 33.3MB)
// 테스트 5 〉	통과 (0.20ms, 33.6MB)
// 테스트 6 〉	통과 (0.36ms, 33.5MB)
// 테스트 7 〉	통과 (0.33ms, 33.4MB)
// 테스트 8 〉	통과 (0.37ms, 33.6MB)
// 테스트 9 〉	통과 (0.33ms, 33.6MB)
// 테스트 10 〉	통과 (0.31ms, 33.5MB)
// 테스트 11 〉	통과 (142.30ms, 63.3MB)
// 테스트 12 〉	통과 (140.17ms, 63.4MB)
// 테스트 13 〉	통과 (153.94ms, 63.4MB)
// 테스트 14 〉	통과 (183.92ms, 63.1MB)
// 테스트 15 〉	통과 (139.60ms, 63.5MB)
// 테스트 16 〉	통과 (0.12ms, 33.5MB)
// 테스트 17 〉	통과 (0.13ms, 33.4MB)
// 테스트 18 〉	통과 (0.12ms, 33.5MB)
// 테스트 19 〉	통과 (0.20ms, 33.5MB)
