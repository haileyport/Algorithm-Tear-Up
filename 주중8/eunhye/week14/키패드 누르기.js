// 결국 못 풀어서 좋은 풀이를 보고 썼습니다 ^^..

function solution(numbers, hand) {
  // hand를 처음부터 R과 L로 치환
  hand = hand[0] === 'r' ? 'R' : 'L';
  // 각각의 번호를 포지션으로 변경
  // 4 4 4
  // 3 3 3
  // 2 2 2
  // - 1 -
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2];

  //위치 표기
  let h = { L: [1, 1], R: [1, 1] };

  return numbers
    .map((x) => {
      // 1 4 7이면 L
      // a.test(b)는 b가 a의 정규식에 포함되는지 확인하는 함수
      if (/[147]/.test(x)) {
        // 왼손의 포지션을 x의 포지션으로 변경
        // 자기 손만 누를 수 있는 번호는 h.L[1] === 1
        h.L = [position[x], 1];
        return 'L';
      }
      // 3 6 9이면 R
      if (/[369]/.test(x)) {
        h.R = [position[x], 1];
        return 'R';
      }
      // 1 4 7, 3 6 9가 아닌 경우
      // 가운데 라인은 공용이니까 h.L[1] === 0
      // 각각의 손 위치에서 목표 위치까지의 길이
      let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
      let distR = Math.abs(position[x] - h.R[0]) + h.R[1];
      if (distL === distR) {
        //hand(어느 손 잡이인지) 손으로 잡기
        h[hand] = [position[x], 0];
        return hand;
      }
      if (distL < distR) {
        // 더 가까운 손
        h.L = [position[x], 0];
        return 'L';
      }
      // 더 가까운 손
      h.R = [position[x], 0];
      return 'R';
    })
    .join('');
}
