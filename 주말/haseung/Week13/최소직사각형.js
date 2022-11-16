function solution(sizes) {
  let w = sizes.map((el) => el[0]);
  let h = sizes.map((el) => el[1]);

  const len = sizes.length;

  for (let i = 0; i < len; i++) {
    if (w[i] < h[i]) {
      let temp = w[i];
      w[i] = h[i];
      h[i] = temp;
    }
  }
  const maxWidth = Math.max(...w);
  const maxHeight = Math.max(...h);

  const answer = maxWidth * maxHeight;
  return answer;
}
