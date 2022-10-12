function solution(n) {
  let one = n-1;
  if(n % one == 1){
      for (let a = 2 ; a <= one ; a++){
          if (one % a == 0){
              return a;
          }
      }
  }else{
      return one;
  }
}