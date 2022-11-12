function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;

  let arr = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    arr[i] = arr[i - 1] + (arr[i - 2] % 1234567);
    arr.push(arr[i]);
  }

  return arr[n] % 1234567;
}
