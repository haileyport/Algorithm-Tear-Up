function solution(s) {
  if (s.length % 2 === 0) return s[Math.ceil(s.length / 2) - 1] + s[Math.ceil(s.length / 2)];
  else return s[Math.ceil(s.length / 2) - 1];
}