/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (6.17ms, 36.1MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.16ms, 33.4MB)
테스트 7 〉	통과 (0.15ms, 33.5MB)
테스트 8 〉	통과 (0.11ms, 33.5MB)
테스트 9 〉	통과 (1.10ms, 34.5MB)
테스트 10 〉	통과 (8.89ms, 36.3MB)
테스트 11 〉	통과 (7.57ms, 35.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(s) {
  // translated = 변환 횟수, removed = 제거된 0 개수
  function translate(num, translated, removed) {
    let numCopy;
    typeof num === "number" ? (numCopy = num.toString(2)) : (numCopy = num);

    if (parseInt(numCopy, 2) === 1) return [translated, removed];

    let removedInHere = numCopy.split("0").length - 1;
    let newNum = numCopy.replaceAll("0", "").length;

    return translate(...[newNum, translated + 1, removed + removedInHere]);
  }

  let num = s,
    translated = 0,
    removed = 0;

  return translate(num, translated, removed);
}

//다른 사람의 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
// 코드는 더 간결한데 시간복잡도가 조금 더 많이 나온다
