function solution(s) {
  let high = Math.max(...s.split(' ').map(Number))
  let low = Math.min(...s.split(' ').map(Number))
  return `${low} ${high}`
}