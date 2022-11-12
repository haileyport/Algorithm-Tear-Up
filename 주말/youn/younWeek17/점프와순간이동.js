function solution(n) {
  //우선 X2라서 1칸은 무조건 점프를 해야한다 +1
  //
  let result = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      n = n - 1;
      result = result + 1;
    } else {
      n = n / 2;
    }
  }
  return result;
}
