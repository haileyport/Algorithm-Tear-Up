function solution(babbling) {
  let answer = 0;
  let can = ['aya', 'ye', 'woo', 'ma'];

  babbling.map((el) => {
    can.map((word) => {
      // 말할 수 있는 언어가 2번 반복되지 않으면 그냥 리턴
      if (el.indexOf(word + word) != -1) return;
      // el에 들어있는 단어를 0으로 변환
      el = el.replaceAll(word, 0);
    });
    // el의 각각의 단어가 0이 아닌 애들만 걸렀을 때 빈 string과 동일
    // === 전부 0일때 === 전부 발음 가능 => answer +1
    if (el.split('').filter((ele) => ele != 0).length === 0) answer++;
  });
  return answer;
}

// 테스트 1 〉	통과 (0.18ms, 33.4MB)
// 테스트 2 〉	통과 (0.18ms, 33.4MB)
// 테스트 3 〉	통과 (0.18ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.19ms, 33.5MB)
// 테스트 6 〉	통과 (0.27ms, 33.4MB)
// 테스트 7 〉	통과 (0.10ms, 33.5MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.6MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
// 테스트 11 〉	통과 (0.20ms, 33.4MB)
// 테스트 12 〉	통과 (0.38ms, 33.5MB)
// 테스트 13 〉	통과 (0.42ms, 33.6MB)
// 테스트 14 〉	통과 (0.38ms, 33.6MB)
// 테스트 15 〉	통과 (0.47ms, 33.5MB)
// 테스트 16 〉	통과 (0.43ms, 33.5MB)
// 테스트 17 〉	통과 (0.37ms, 33.6MB)
// 테스트 18 〉	통과 (0.34ms, 33.6MB)
// 테스트 19 〉	통과 (0.22ms, 33.4MB)
// 테스트 20 〉	통과 (0.28ms, 33.4MB)
