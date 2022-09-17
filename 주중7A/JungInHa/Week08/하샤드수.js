function solution(x) { 
  const digits = String(x).split('').map(n => Number(n));
  const sum = digits.reduce((acc, cur, idx) => {
    return acc + cur;
  })

  var answer = (x % sum === 0) ? true : false;
  return answer;
}