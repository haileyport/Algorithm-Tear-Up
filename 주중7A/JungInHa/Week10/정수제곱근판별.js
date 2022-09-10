function solution(n) {
  const squareRoot = Math.sqrt(n);
  const answer = (Number.isInteger(squareRoot) && squareRoot > 0) ? 
  Math.pow(squareRoot + 1, 2) : -1;

  return answer;
}