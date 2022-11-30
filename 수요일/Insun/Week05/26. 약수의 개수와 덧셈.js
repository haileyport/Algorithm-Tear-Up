function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let arr = [];
    for (let n = 1; n <= i; n++) {
      if (i % n === 0) {
        arr.push(n);
      }
    }
    !(arr.length % 2)
      ? (result += arr[arr.length - 1])
      : (result -= arr[arr.length - 1]);
  }
  return result;
}
