/**
 * 통과 여부 : O
 * 시간 : 3분
 * 점수 : +4
 */

const s = '-1 -2 -3 -4';

function solution1(s) {
  // s를 공백을 기준으로 분리하여 배열화 && 숫자로 변경
  const array = s.split(' ').map(el => +el);
  // max 와 min을 각각 구한다.
  const max = Math.max(...array);
  const min = Math.min(...array);

  // 문자열화 하여 리턴...
  return `${min} ${max}`;
}

const result1 = solution1(s);
console.log(result1);

/*
[테스트]
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉통과 (0.07ms, 33.4MB)
테스트 11 〉통과 (0.05ms, 33.4MB)
테스트 12 〉통과 (0.07ms, 33.5MB)
*/
