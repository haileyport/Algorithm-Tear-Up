function solution(x) {
  let sum = 0;
  const arr = String(x);
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum === 0 ? true : false; //x가 sum으로 나누어 떨어지면 true 아니면 false
}
