function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

function solution1(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
