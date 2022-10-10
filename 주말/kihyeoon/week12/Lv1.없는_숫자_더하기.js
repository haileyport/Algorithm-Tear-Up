solution([1, 2, 3, 4, 6, 7, 8, 0]);

function solution(numbers) {
  let ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return ten.filter((el) => !numbers.includes(el)).reduce((a, b) => a + b);
}

function solution1(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

function solution2(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
