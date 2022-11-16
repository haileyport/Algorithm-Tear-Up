/*
 * 통과 여부 : 통과
 * 시간 : 1시간 15분
 * 점수 : 11점 😎
 * 바로 앞이나 바로 뒷 번호 학생에게만 빌려줄 수 있음
 * 체육복을 적절히 빌려 최대한 많은 학생이 들어야 함
 * 여벌 체육복을 가져와도 도난 당했을 수 있음.
 */

/**
 * @param {*} n 전체 학생 수 2 <= n <= 30
 * @param {*} lost 도난 당한 학생 수 1 <= lost <= n
 * @param {*} reserve 여벌 체육복 가져온 학생  1 <= reverse <= n
 * @returns 수업을 들을 수 있는 학생의 최댓값
 */
function solution(n, lost, reserve) {
  let uniform = {};

  // 체육복 갯수 초기화
  for (let i = 1; i <= n; i++) {
    uniform[i] = 1; // 기본적으로 체육복은 1개
  }

  // 여벌 있는 애들
  reserve.forEach((v, i) => {
    uniform[v] = 2;
  });

  // 잃어버린 애들 초기화
  lost.forEach((v, i) => {
    // 만약 여벌 있는 애들이 잃어버렸으면?
    uniform[v] -= 1;
  });

  // 틀린 이유 2) 반복문 조건 때문에 마지막 꺼 확인 안함.
  for (i = 0; i <= n; i++) {
    // 여벌이 있다면
    if (uniform[i] === 2) {
      if (uniform[i - 1] === 0) {
        // 틀린 이유 1) 이전 애 확인 안함.
        // 이전 애가 잃어버린 애라면
        uniform[i] = 1;
        uniform[i - 1] = 1;
      } else if (uniform[i + 1] === 0) {
        // 다음 애가 잃어버린 애였다면
        uniform[i] = 1;
        uniform[i + 1] = 1;
      }
    }
  }

  let count = 0;
  for (key in uniform) {
    if (uniform[key] === 0) {
      count++;
    }
  }
  return n - count; // 값이 0 아닌 애 찾으면 될 듯
  // return uniform;
}

let output = solution(6, [2, 3, 4, 5], [1, 6]);
console.log(output);

/**
 * 테스트 1 〉	통과 (0.11ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.4MB)
테스트 4 〉	통과 (0.20ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.4MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.4MB)
테스트 8 〉	통과 (0.19ms, 33.5MB)
테스트 9 〉	통과 (0.20ms, 33.5MB)
테스트 10 〉	통과 (0.22ms, 33.4MB)
테스트 11 〉	통과 (0.10ms, 33.5MB)
테스트 12 〉	통과 (0.09ms, 33.4MB)
테스트 13 〉	통과 (0.11ms, 33.5MB)
테스트 14 〉	통과 (0.10ms, 33.4MB)
테스트 15 〉	통과 (0.16ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.4MB)
테스트 17 〉	통과 (0.10ms, 33.4MB)
테스트 18 〉	통과 (0.10ms, 33.4MB)
테스트 19 〉	통과 (0.13ms, 33.5MB)
테스트 20 〉	통과 (0.12ms, 33.5MB)
 */