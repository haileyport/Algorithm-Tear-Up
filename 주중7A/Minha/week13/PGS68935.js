function solution(n) {
  let three = n.toString(3);
  return parseInt([...three].reverse().join(''), 3);
}