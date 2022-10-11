function solution(a, b) {
  return a.map((el, i) => el*b[i]).reduce((a,b) => a + b)
}