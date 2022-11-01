// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 32MB)
// 테스트 2 〉	통과 (0.07ms, 32MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(s) {
  // s를 " "(공백문자) 기준으로 split하여 배열화하고 number로 변환
  let arr = s.split(" ").map((v) => +v);
  // arr 요소 중 최솟값과 최댓값을 찾는다.
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return `${min} ${max}`;
}

//다른 사람의 풀이
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
// 굳이 숫자로 변환해주지 않아도 대소가 구분 가능하다고 한다.
