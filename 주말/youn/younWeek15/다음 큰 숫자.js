function solution(n) {
  let i = n + 1;
  while (n < i) {
    if (
      n.toString(2).split("0").join("").length ===
      i.toString(2).split("0").join("").length
    ) {
      return i;
    } else {
      i++;
    }
  }
}
