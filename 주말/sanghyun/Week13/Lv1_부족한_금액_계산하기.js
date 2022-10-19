function solution(price, money, count) {
  let total = 0;
  for (let a = 1 ; a <= count ; a++){
      total += (price*a);
      // console.log(total);
  }
  if (total <= money){
      return 0;
  }else{
      return total-money
  }
}