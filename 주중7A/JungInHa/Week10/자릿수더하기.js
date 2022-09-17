function solution(n){
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}