function solution(s) {
  let count = 0,
    zero = 0;
  for (; s !== "1"; count++) {
    zero += s.split("0").length - 1;
    s = s.replace(/0/gi, "").length.toString(2);
  }
  return [count, zero];
}
