function solution(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      arr.push(0);
    }
    if (i === 1) {
      arr.push(1);
    }
    if (i >= 2) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}
