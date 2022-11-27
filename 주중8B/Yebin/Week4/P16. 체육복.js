/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 32.9MB)
테스트 3 〉	통과 (0.17ms, 33MB)
테스트 4 〉	통과 (0.08ms, 33.5MB)
테스트 5 〉	통과 (0.18ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.5MB)
테스트 10 〉	통과 (0.17ms, 33.5MB)
테스트 11 〉	통과 (0.09ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.4MB)
테스트 15 〉	통과 (0.11ms, 33.6MB)
테스트 16 〉	통과 (0.12ms, 33.4MB)
테스트 17 〉	통과 (0.08ms, 33.4MB)
테스트 18 〉	통과 (0.08ms, 33.6MB)
테스트 19 〉	통과 (0.07ms, 33.4MB)
테스트 20 〉	통과 (0.08ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(n, lost, reserve) {
  // 본인 것만 있는 사람 'normal'
  let arr = Array(n).fill("normal");
  // 도난 당한 사람 'lost'
  for (let i = 0; i < lost.length; i++) {
    arr[lost[i] - 1] = "lost";
  }
  // 도난 당했지만 여벌 가져온 사람 'normal'
  // 본인 것도 있고 여벌도 있는 사람 'reserve'
  for (let i = 0; i < reserve.length; i++) {
    arr[reserve[i] - 1] = arr[reserve[i] - 1] === "lost" ? "normal" : "reserve";
  }

  // 본인이 'lost'이고 앞 사람이 'reserve'면 둘다 'normal'로 변경
  // 본인이 'lost'이고 뒷 사람이 'reserve'면 둘다 'normal'로 변경
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "lost" && arr[i - 1] === "reserve") {
      arr[i] = "normal";
      arr[i - 1] = "normal";
    } else if (arr[i] === "lost" && arr[i + 1] === "reserve") {
      arr[i] = "normal";
      arr[i + 1] = "normal";
    }
  }
  return arr.filter((el) => el !== "lost").length;
}
