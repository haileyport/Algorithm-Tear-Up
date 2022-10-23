// 1점
function solution(sizes) {
  sizes = sizes.map((el) => {
    return el.sort((a, b) => a - b);
  });

  const wallet = [0, 0];

  sizes.forEach((el) => {
    wallet[0] = el[0] > wallet[0] ? el[0] : wallet[0];
    wallet[1] = el[1] > wallet[1] ? el[1] : wallet[1];
  });

  return wallet[0] * wallet[1];
}
