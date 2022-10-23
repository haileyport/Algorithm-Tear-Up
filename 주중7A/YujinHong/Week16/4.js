function solution(arr) {
  const min = Math.min(...arr);

  arr = arr.filter((el) => el !== min);

  return arr.length ? arr : [-1];
}
