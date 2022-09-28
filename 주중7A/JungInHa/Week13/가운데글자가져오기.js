function solution(s) {
  const len = s.length;
  return (len % 2 !== 0) ? s[len / 2 - 0.5] : s.substr((len / 2) - 1, 2);
}
