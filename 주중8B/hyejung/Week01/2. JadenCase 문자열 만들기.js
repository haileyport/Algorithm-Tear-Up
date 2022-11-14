/**
 * 통과 여부 : O
 * 시간 : 10분
 * 점수 : +14
 */

const s = 'for the last week ';

function solution1(s) {
  return s
    .split(' ')
    .map(string => {
      const [a, ...b] = string.toLowerCase();
      return a !== undefined ? a.toUpperCase() + b.join('') : '';
    })
    .join(' ');
}

const result1 = solution1(s);
console.log(result1);

/*
[테스트]
테스트 1 〉	통과 (0.07ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.5MB)
테스트 4 〉	통과 (0.18ms, 33.5MB)
테스트 5 〉	통과 (0.19ms, 33.5MB)
테스트 6 〉	통과 (0.18ms, 33.6MB)
테스트 7 〉	통과 (0.18ms, 33.6MB)
테스트 8 〉	통과 (0.07ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.06ms, 33.6MB)
테스트 11 〉	통과 (0.19ms, 33.4MB)
테스트 12 〉	통과 (0.17ms, 33.6MB)
테스트 13 〉	통과 (0.17ms, 33.5MB)
테스트 14 〉	통과 (0.18ms, 33.5MB)
테스트 15 〉	통과 (0.19ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.4MB)
테스트 17 〉	통과 (0.18ms, 33.6MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)
 */
