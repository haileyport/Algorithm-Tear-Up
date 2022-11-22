/*
테스트 1 〉	통과 (0.18ms, 33.5MB)
테스트 2 〉	통과 (5.00ms, 37MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 32.2MB)
테스트 6 〉	통과 (0.25ms, 32.6MB)
테스트 7 〉	통과 (0.24ms, 33.5MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (7.48ms, 39.5MB)
테스트 10 〉	통과 (7.85ms, 39.5MB)
테스트 11 〉	통과 (3.76ms, 37.6MB)
정확성: 100.0
합계: 100.0 / 100.0
*/
function solution(s) {
  let arr = [s, 0];
  let i = 0;
  while (arr[0] !== "1") {
    i++;
    arr = filter(arr[0], arr[1]);
  }

  return [i, arr[1]];
}

const filter = (s, count) => {
  let _s = "";
  //0제거
  for (let i = 0; i < s.length; i++) {
    s[i] === "1" ? (_s = _s + s[i]) : count++;
  }

  //이진변환
  let target = _s.length;
  let remainder = [];

  while (target !== 0) {
    remainder.unshift(target % 2); //나누기를 먼저하면 값이 변해버림
    target = Math.floor(target / 2);
  }

  return [remainder.join(""), count];
};
