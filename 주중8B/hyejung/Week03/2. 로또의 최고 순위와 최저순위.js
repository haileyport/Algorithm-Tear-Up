/**
 * 통과 여부 : O
 * 시간 : 30분
 * 점수 : + 10점?
 */

function solution(lottos, win_nums) {
  // 조금이라도 빨리 탐색하라고 두 배열 모두 오름차순 정렬해봤습니다.
  let lotto = lottos.slice().sort((a, b) => a - b);
  let wins = win_nums.slice().sort((a, b) => a - b);

  // 0의 갯수
  let myCnt = lotto.filter(el => !el).length;
  // 0을 제외한 나머지 숫자 중 맞은 갯수
  let corrects = lotto.filter(el => wins.includes(el)).length;
  // 최고 순위는 내 로또 중 0을 추첨 번호라고 가정하기 때문에 0의 갯수 + 맞은 갯수를 계산합니다.
  let allCorrect = myCnt + corrects;

  // 최저순위는 맞은 갯수가 0이나 1이라면 확정적으로 6위이고, 나머지라면 7 - 맞은 갯수를 하여 구할 수 있습니다.
  let lowest = corrects <= 1 ? 6 : 7 - corrects;
  // 최고순위도 모든 맞은 갯수를 계산했을 때 0이나 1이라면 확정적으로 6위이고 아니라면 7 - 맞은 갯수 입니다.
  let highest = allCorrect <= 1 ? 6 : 7 - allCorrect;

  // 순서에 맞게 리턴합니다.
  return [highest, lowest];
}

const res = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
console.log(res);

// 레퍼런스
function reference(lottos, win_nums) {
  // 이렇게 순위를 배열을 활용하면 편리하겠더군요?
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

/*
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.4MB)
테스트 5 〉	통과 (0.12ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.4MB)
테스트 7 〉	통과 (0.09ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)
테스트 10 〉	통과 (0.09ms, 33.4MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.08ms, 33.4MB)
테스트 13 〉	통과 (0.13ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.6MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
*/
