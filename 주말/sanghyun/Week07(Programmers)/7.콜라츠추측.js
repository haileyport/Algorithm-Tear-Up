function solution(num) {
  for(let i = 1; i <= 500; i++){
    if(num === 1){
      return i - 1;
    }else if (i === 500){
      return -1;
    }
    if(num % 2 === 0){
      num = num / 2;
			console.log('짝수'+num)
    }else if(num % 2 === 1){
      num = (num * 3) + 1;
      console.log('홀수'+num)
    }
  }
}
/* 먼저 푼 풀이
let count = 1
  if(num == 1 ) return 0;

  while (count < 501){
      if(num % 2 == 0){
          num = num / 2
      }else{
          num = (num * 3) + 1
      }

      if(num != 1){
          count += 1;
      }else{
          return count;
      }

  }
  return -1;
*/
let output = solution(6);
console.log(output);
