function solution(x) {
  let sum = String(x).split('').map(el => Number(el)).reduce((a, b) => a + b)
  // console.log(sum);
  return x % sum === 0 ? true : false;
  // let divider = 0;
  // let numString = String(x);
  // for (let i = 0; i < numString.length; i++){
  //   console.log(numString[i])
  //   divider += Number(numString[i])
  // }
  // console.log(divider)
  // if(x % divider === 0){
  //   return true;
  // }else{
  //   return false;
  // }
}