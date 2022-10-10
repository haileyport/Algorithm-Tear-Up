function solution(absolutes, signs) {
  return absolutes
    .map((el, i) => (signs[i] ? el : el * -1))
    .reduce((a, b) => a + b);
}

function solution1(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur : -cur), 0);
}

solution([4, 7, 12], [true, false, true]);
