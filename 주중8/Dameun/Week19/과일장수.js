function solution(k, m, score) {
  const arr = score.sort((a, b) => b - a);
  let count = 0;

  for (let n = m - 1; n < arr.length; n += m) {
    count += arr[n] * m;
  }
  return count;
}
//위에서부터 m개씩

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
