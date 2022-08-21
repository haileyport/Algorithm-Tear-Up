function solution(arr) {
  //1차
  // let x = arr.length
  // let answer = 0;
  // for (let i of arr){
  //     answer += Number(i);
  // }
  // return answer/x;
  //2차
  return arr.reduce((a, b) => a + b) / arr.length;
}