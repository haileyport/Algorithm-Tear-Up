function solution(n) {
  return n.toString().split('').map(el => Number(el)).reduce((acc, cur) => acc + cur);
}