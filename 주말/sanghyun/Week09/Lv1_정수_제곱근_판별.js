function solution(n) {
  let result = Number.isInteger(Math.sqrt(n));
  if(result){
      return (Math.sqrt(n) + 1)**2
  }else{
      return -1;
  }
//     if(n==1) return 4;
  
//     for(let i = 1; i <= n/2; i ++) {
//         if((n/i) == i) {
//             return (i+1)**2;
//         }
//     }
//     return -1;
}