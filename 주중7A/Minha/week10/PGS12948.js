function solution(n) {
  //숫자 -> string화 -> 각각 배열로 split -> 다시 Number화 -> 내림차순 정렬 -> 배열을 string으로 -> Number()화
  return Number(n.toString().split('').map(el => Number(el)).sort((a, b) => b - a).join(''));
}