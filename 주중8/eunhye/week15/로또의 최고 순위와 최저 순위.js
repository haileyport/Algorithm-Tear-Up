function solution(lottos, win_nums) {
  //입력값: 로또넘버, 맞는 넘버
  //출력값: 최고 순위, 최저순위 배열
  //lottos에 중복숫자는 0뿐임
  //1~6위는 각각 일치하는 번호가 6~1개
  let answer = [];
  const zero = lottos.filter((e) => 0 === e).length;
  const match = win_nums.filter((e) => lottos.includes(e)).length;

  const rank = [6, 6, 5, 4, 3, 2, 1];
  const worst = rank[match];
  const best = zero === 6 ? 1 : rank[match + zero];

  answer.push(best, worst);

  return answer;
}

// 정확성
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)
// 테스트 11 〉	통과 (0.06ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.06ms, 33.4MB)
