function solution(s) {
  const length = s.length
  return length % 2 ? s[Math.floor(length/2)] : s.slice(length/2 - 1, length/2 + 1)
}