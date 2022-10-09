const getDivisors = (num) => {
  const divisors = [];
  for(let i = 1 ; i <= num/2 ; i++){
      if(num % i === 0) divisors.push(i);
  }
  return [...divisors, num];
}

function solution(left, right) {
  let result = [];
  for (left; left <= right; left++){
      let prompt = getDivisors(left).length;
      if(prompt % 2 === 0){
          result.push(left);
      }else{
          result.push(-left);
      }
  }
  return result.reduce((a, b) => a + b);
  
}