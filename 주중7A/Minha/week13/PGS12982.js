function solution(d, budget) {
  var answer = 0;

  // d를 작은순으로 정렬
  d = d.sort((a, b) => a - b);
  // 앞에서부터 하나씩 확인
  d.forEach(el => {
    if (budget > 0 && budget >= el) {
      budget -= el;
      answer += 1;
    }
  })
  return answer;
}