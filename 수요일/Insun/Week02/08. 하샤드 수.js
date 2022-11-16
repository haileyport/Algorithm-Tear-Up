function solution(x) {
  // x를 십의 자리수, 일의 자리수로 나눈다
  // 나눈 두 수를 더한다
  // x를 위에서 더한 수로 나눈다.
  // 나머지가 0이면 true, 아니면 false

  let str = String(x).split("");

  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  if (x % sum === 0) {
    return true;
  }
  return false;
}
