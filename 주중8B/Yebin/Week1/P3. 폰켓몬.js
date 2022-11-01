/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.6MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
테스트 8 〉	통과 (0.03ms, 33.5MB)
테스트 9 〉	통과 (0.03ms, 33.5MB)
테스트 10 〉	통과 (0.03ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.5MB)
테스트 12 〉	통과 (0.09ms, 33.6MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.57ms, 34.2MB)
테스트 17 〉	통과 (0.54ms, 34.4MB)
테스트 18 〉	통과 (0.39ms, 34MB)
테스트 19 〉	통과 (0.29ms, 33.9MB)
테스트 20 〉	통과 (0.22ms, 33.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(nums) {
  // 중복된 숫자를 제거한 set으로 만든다
  let uniqSet = new Set(nums);
  // nums / 2보다 uniqSet.size가 크다면 nums / 2를 출력한다
  // nums / 2보다 uniqSet.size가 작다면 uniqSet.size를 출력한다
  return uniqSet.size > nums.length / 2 ? nums.length / 2 : uniqSet.size;
}

//다른 사람의 풀이
