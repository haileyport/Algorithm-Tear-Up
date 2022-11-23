function solution(numbers) {
  let base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result = 0;

  for (let i = 0; i < base.length; i++) {
    if (numbers.includes(base[i]) === false) {
      result += base[i];
    }
  }
  return result;
}
