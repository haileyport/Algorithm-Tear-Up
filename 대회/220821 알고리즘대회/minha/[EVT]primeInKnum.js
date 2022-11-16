<<<<<<< HEAD
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
=======
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
>>>>>>> 5e9358ed1d66fd797ecc2342022c15d3cc3c9ef9
}