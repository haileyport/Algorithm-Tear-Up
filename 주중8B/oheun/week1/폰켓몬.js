/*
통과 여부 : 통과
시간 : 10분
점수 : +1

테스트 결과 :
테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.6MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.6MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	통과 (0.12ms, 33.5MB)
테스트 14 〉	통과 (0.08ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.59ms, 34.2MB)
테스트 17 〉	통과 (0.57ms, 34.2MB)
테스트 18 〉	통과 (0.39ms, 34MB)
테스트 19 〉	통과 (0.30ms, 33.9MB)
테스트 20 〉	통과 (0.35ms, 33.8MB)

*/

/**
 * @param {*} nums 폰켓몬의 종류 번호가 담긴 1차원 배열
 * @returns  가장 많이 가져갈 수 있는 폰켓몬의 종류의 개수
 */
function solution(nums) {
  let length = nums.length / 2; // N/2마리
  let set = new Set(nums); // 중복 제거
  let fileteredNums = [...set]; // 배열로 전환

  // N/2보다 크면 N/2만큼이 최대 종류. 아니라면 N/2만큼
  return fileteredNums.length > length ? length : fileteredNums.length;
}

let nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));
