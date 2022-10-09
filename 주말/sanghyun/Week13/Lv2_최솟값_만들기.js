function solution(A,B){
  // 재귀 시간 초과
  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => a - b);
  
  let result = 0;
  
  let counter = A.length - 1
  for(let i = 0; i < A.length ; i++){
      result = result + (sortA[i] * sortB[counter])
      counter--;
  }
  return result;
}