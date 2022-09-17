function solution(n) {
  return Number([...String(n)].sort((a, b) => b - a).join(''));
}