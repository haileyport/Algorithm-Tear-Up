function solution(numbers) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result = 0;
  arr.map((el) => {
    if (!numbers.includes(el)) result += el;
  });

  return result;
}
