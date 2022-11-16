function solution(left, right) {
  //약수의 개수 구하기

  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (num / i != i) divisors.push(num / i);
      }
    }
    return divisors.length;
  };

  let count = 0;

  for (i = left; i <= right; i++) {
    const res = getDivisors(i);
    count = res % 2 === 1 ? count - i : count + i;
  }
  return count;
}
