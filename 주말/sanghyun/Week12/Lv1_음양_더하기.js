function solution(absolutes, signs) {
  return absolutes.map((el, i) => {
      if(signs[i] === false) return el * -1
      else return el
  }).reduce((a, b) => a + b);
}