function solution(n) {
  const arr = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a);
  return Number(arr.join(""));
}
