// const solution = (d,budget) => {

  
//   let newarr = d.sort((a,b)=>a-b)
//   let sum1 = 0
//   let result = []
//  for(let i =0; i< newarr.length; i++){
//    if(sum1 < budget){
//      sum1 = sum1+ newarr[i]
//      result.push(newarr[i])
//    }
//  }
// return sum1> budget ?result.length-1 : result.length
// }

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

   return d.length;
}