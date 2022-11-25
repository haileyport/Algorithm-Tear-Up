/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
테스트 13 〉	통과 (0.08ms, 33.3MB)
테스트 14 〉	통과 (0.06ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (0.07ms, 32.9MB)
테스트 2 〉	통과 (0.08ms, 32.9MB)
테스트 3 〉	통과 (0.09ms, 33MB)
테스트 4 〉	통과 (0.08ms, 32.9MB)
테스트 5 〉	통과 (0.11ms, 33MB)
테스트 6 〉	통과 (0.09ms, 33.3MB)
*/

function solution(n) {
  let next = n;
  let convert = Countfunc(n);
  for (let i = 1; ; i++) {
    next = n + i; //1씩더하고 2진수로 변환한뒤 1의 개수를 count
    if (Countfunc(next) === convert) break;
  }

  return next;
}

function Countfunc(num) {
  num = num.toString(2);
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "1") count++;
  }
  return count;
}
