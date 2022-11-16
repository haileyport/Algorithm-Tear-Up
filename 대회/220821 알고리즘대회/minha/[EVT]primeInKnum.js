function solution(n, k) {
  var answer = 0;
  let kn = n.toString(k);
  let testNum = kn.split(0);
  testNum.map(el => {
    if (el.length > 0 && isPrime(Number(el))) answer++;
  })
  return answer;
}

const isPrime = (n) => {
  if (n === 1) return false;
  else {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) count++;
    }
    return (count === 0) ? true : false;
  }
}