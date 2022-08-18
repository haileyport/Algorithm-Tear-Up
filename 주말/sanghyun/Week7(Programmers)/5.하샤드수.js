function solution(x) {
  // 1차
  // var answer = true;
  // let input = String(x);
  // let sum = 0; 
  // for(let i of input){
  //     sum += Number(i);    
  // }
  // if(x%sum == 0) {
  //     return answer;
  // }else{
  //     return false;
  // }
  // 2차
  // let divider = 0;
  // let numString = String(x);
  // for (let i = 0; i < numString.length; i++){
  //     console.log(numString[i])
  //     divider += Number(numString[i])
  // }
  // console.log(divider)
  // if(x % divider === 0){
  //     return true;
  // }else{
  //     return false;
  // }
  // 3차
  let sum = String(x).split('').map(el => Number(el)).reduce((a,b) => a + b)
  // console.log(sum);
  return x % sum === 0 ? true : false;
}