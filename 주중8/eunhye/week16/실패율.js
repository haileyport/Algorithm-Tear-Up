// 한 30줄 썼는데 다른 사람의 풀이 보니까 10줄만에 끝나는거 뭐죠?? 자괴감 MAX
// 그래도 6점

function solution(N, stages) {
  // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
  // 스테이지에 도달한 유저가 없으면 실패율 0
  // 실패율이 같으면 작은 번호 우선
  // stages는 현재 유저들이 도전중인 스테이지
  // stages가 N+1이라면 마지막 스테이지(N)까지 클리어한 사용자
  // N: 스테이지 수

  // 스테이지 수 만큼 0을 원소로 가지는 arr
  const arr = Array.from({ length: N + 1 }, () => 0);
  // 현재 도전 중인 스테이지 정렬(오름차순)
  const user = stages.sort((a, b) => a - b);
  // 실패율
  let fail = [];

  // 각 유저의 도전 스테이지를 arr에 담아서 스테이지별로 몇 명이 있는지 계산
  user.forEach((el) => {
    arr[el - 1]++;
  });

  // 스테이지별로 실패율 계산
  arr.forEach((el, idx) => {
    if (idx === N) {
      return;
    }
    // 클리어하지 못한 플레이어 수 el
    // 도달한 플레이어 수 el + 나머지 el
    // 도달한 플레이어 수를 구하기 위해서 arr.slice(idx)
    // N+1은 마지막 스테이지를 깬 유저로 계산해야함
    const achive = arr.slice(idx).reduce((a, b) => {
      return a + b;
    }, 0);
    if (idx === N - 1) {
      fail.push(el / achive);
    } else {
      fail.push(el / achive);
    }
  });

  // 실패율을 다시 스테이지 순으로 나열

  fail = fail
    .map((el, idx) => {
      return { i: idx + 1, value: el };
    })
    .sort((a, b) => {
      if (a.value > b.value) return -1;
      if (a.value < b.value) return 1;
      if (a.value === b.value) {
        return a.value - b.value;
      }
    })
    .map((el) => {
      return el.i;
    });

  return fail;
}

// 정확성 테스트
// 시간 대박이다 진짜
// 테스트 1 〉	통과 (0.27ms, 33.5MB)
// 테스트 2 〉	통과 (0.52ms, 33.5MB)
// 테스트 3 〉	통과 (11.63ms, 36.7MB)
// 테스트 4 〉	통과 (29.62ms, 39.5MB)
// 테스트 5 〉	통과 (61.58ms, 45.8MB)
// 테스트 6 〉	통과 (0.81ms, 33.6MB)
// 테스트 7 〉	통과 (3.85ms, 36.1MB)
// 테스트 8 〉	통과 (29.67ms, 39.5MB)
// 테스트 9 〉	통과 (63.01ms, 45.8MB)
// 테스트 10 〉	통과 (26.06ms, 39.3MB)
// 테스트 11 〉	통과 (26.51ms, 39.7MB)
// 테스트 12 〉	통과 (44.37ms, 41.2MB)
// 테스트 13 〉	통과 (42.12ms, 42.1MB)
// 테스트 14 〉	통과 (0.30ms, 33.5MB)
// 테스트 15 〉	통과 (11.72ms, 37.4MB)
// 테스트 16 〉	통과 (7.00ms, 37.6MB)
// 테스트 17 〉	통과 (11.27ms, 37.4MB)
// 테스트 18 〉	통과 (6.94ms, 37.5MB)
// 테스트 19 〉	통과 (1.85ms, 33.8MB)
// 테스트 20 〉	통과 (9.71ms, 38.3MB)
// 테스트 21 〉	통과 (16.69ms, 38.3MB)
// 테스트 22 〉	통과 (13.53ms, 42.8MB)
// 테스트 23 〉	통과 (26.66ms, 42.1MB)
// 테스트 24 〉	통과 (40.82ms, 42.9MB)
// 테스트 25 〉	통과 (0.16ms, 33.6MB)
// 테스트 26 〉	통과 (0.15ms, 33.6MB)
// 테스트 27 〉	통과 (0.13ms, 33.5MB)
