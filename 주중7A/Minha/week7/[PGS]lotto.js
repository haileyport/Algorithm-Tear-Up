function solution(lottos, win_nums) {
  let answer = [];
  let zeronum = 0;
  // win_nums에서 lottos랑 같은 수 제거
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) zeronum++; // 0 개수 카운트
    win_nums = win_nums.filter(el => el !== lottos[i]);
  }

  // 남은애들 중에 0과 win_nums를 비교
  let correct = 6 - win_nums.length;
  let max = correct;
  if (win_nums.length >= zeronum) max += zeronum;

  answer.push(rank(max));
  answer.push(rank(correct));


  return answer;
}

function rank(num) {
  if (num === 6) return 1;
  if (num === 5) return 2;
  if (num === 4) return 3;
  if (num === 3) return 4;
  if (num === 2) return 5;
  else return 6;
}