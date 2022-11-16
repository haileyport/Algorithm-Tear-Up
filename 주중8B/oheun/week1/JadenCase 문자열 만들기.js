/*
통과 여부 : 통과
시간 : 10분
점수 : +10
*/


/**
 *
 * @param {*} s 문자열
 * @returns 첫 문자가 대문자이고 나머지가 소문자인 문자
 */
function solution(s) {
  // 여러 빈칸도 ' ' split 써두 되나?
  // charAt은 str -> char
  // 첫 번째는 대문자 하고 나머지는 그냥 붙여버리기
  return s
    .toLowerCase() // 전체 소문자로 변환
    .split(" ") // 빈칸으로 구분 "3people / unFollowed/ me"
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 문자열 인덱스
    .join(" "); // 빈칸 1개로 붙이기
}

console.log(solution("abcd    efe"))


/*
테스트 1 〉	통과 (0.05ms, 33.6MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.6MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.6MB)
테스트 14 〉	통과 (0.06ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
테스트 16 〉	통과 (0.05ms, 33.5MB)
테스트 17 〉	통과 (0.06ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
*/
