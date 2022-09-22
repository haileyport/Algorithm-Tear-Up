function solution(strings, n) {
  return strings.sort((a, b) => {
    const aNth = a.charCodeAt(n);
    const bNth = b.charCodeAt(n);

    if (aNth > bNth) return 1;
    else if (aNth < bNth) return -1;
    else return (a > b) ? 1 : -1;
  });
}
