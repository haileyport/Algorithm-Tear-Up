function solution(num) {
  let str = String(num);
  let add = str
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return num % add === 0 ? true : false;
}
