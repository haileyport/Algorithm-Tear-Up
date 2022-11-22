/**
 * 통과 여부 : O
 * 시간 : 1시간
 * 점수 : +11
 */

function solution(str) {
  let games = [];
  let tmp = [str[0]];

  // 숫자를 기준으로 각 점수를 분리하여 games 배열에 push 한다.
  for (let i = 1; i < str.length; i++) {
    // 현재 i가 숫자일 경우 지금까지 쌓인 tmp 배열을 games 에 push 후 tmp 초기화
    if (!isNaN(str[i]) && isNaN(str[i - 1])) {
      games.push(tmp);
      tmp = [];
    }

    // 숫자가 10까지 있으므로, 이 경우 tmp 에 따로 들어가있을 1 과 0을 합쳐 10으로 만들어주자.
    if (!isNaN(tmp[1])) {
      let num = tmp[0] + tmp[1];
      tmp = [num];
    }

    tmp.push(str[i]);
  }
  // 마지막 요소는 포함이 되지 않았으므로 직접 추가해준다.
  games.push(tmp);

  // 거듭제곱 되는 횟수를 저장!
  const powers = {
    S: 1,
    D: 2,
    T: 3,
  };

  let scores = [];

  for (let game of games) {
    // 숫자를 기준으로 분리한 각 점수를 다시 점수, 거듭제곱 수, 옵션으로 분리
    let [num, pow, opt] = game;
    let score = num ** powers[pow];
    // 옵션이 존재한다면 * 인지 # 인지 확인!
    // * 일 경우 이전 요소, 현재 요소의 점수를 * 2 한다.
    if (opt && opt === '*') {
      if (scores.length) scores.push(scores.pop() * 2);
      scores.push(score * 2);
      continue;
    }
    // # 일 경우 현재 점수를 음수로 만든다.
    else if (opt && opt === '#') {
      score = -score;
    }
    scores.push(score);
  }
  return scores.reduce((acc, cur) => acc + cur, 0);
}

const result = solution('1S*2T*3S');
console.log(result);

/*
테스트 1 〉	통과 (0.14ms, 33.5MB)
테스트 2 〉	통과 (0.13ms, 33.4MB)
테스트 3 〉	통과 (0.13ms, 33.4MB)
테스트 4 〉	통과 (0.17ms, 33.5MB)
테스트 5 〉	통과 (0.23ms, 33.4MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.20ms, 33.4MB)
테스트 11 〉	통과 (0.13ms, 33.5MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	통과 (0.13ms, 33.4MB)
테스트 14 〉	통과 (0.15ms, 33.5MB)
테스트 15 〉	통과 (0.13ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
테스트 17 〉	통과 (0.13ms, 33.4MB)
테스트 18 〉	통과 (0.14ms, 33.4MB)
테스트 19 〉	통과 (0.13ms, 33.5MB)
테스트 20 〉	통과 (0.13ms, 33.5MB)
테스트 21 〉	통과 (0.13ms, 33.4MB)
테스트 22 〉	통과 (0.15ms, 33.4MB)
테스트 23 〉	통과 (0.21ms, 33.5MB)
테스트 24 〉	통과 (0.13ms, 33.4MB)
테스트 25 〉	통과 (0.15ms, 33.4MB)
테스트 26 〉	통과 (0.23ms, 33.5MB)
테스트 27 〉	통과 (0.22ms, 33.4MB)
테스트 28 〉	통과 (0.14ms, 33.4MB)
테스트 29 〉	통과 (0.22ms, 33.4MB)
테스트 30 〉	통과 (0.20ms, 33.4MB)
테스트 31 〉	통과 (0.14ms, 33.4MB)
테스트 32 〉	통과 (0.14ms, 33.4MB)
*/
