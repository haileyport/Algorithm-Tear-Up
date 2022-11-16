function solution(numbers) {
  const full = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return full.filter(el => !numbers.includes(el)).reduce((acc, cur) => acc + cur);
}