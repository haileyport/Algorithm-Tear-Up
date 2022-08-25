function solution(lottos, win_nums) {
  var answer = [];
  let highest_ranking = 7; // 최고 순위
  let lowest_ranking = 7; // 최저 순위

  for (const lotto of lottos) {
    for (const win_num of win_nums) {
      if (lotto === win_num) {
        highest_ranking--;
        lowest_ranking--;
      }
    }
    if (lotto === 0) {
      highest_ranking--;
    }
  }

  if (highest_ranking === 7) {
    highest_ranking = 6;
  }
  if (lowest_ranking === 7) {
    lowest_ranking = 6;
  }

  answer.push(highest_ranking, lowest_ranking);

  return answer;
}
