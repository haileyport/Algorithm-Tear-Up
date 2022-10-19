// function solution(n) {
   
//     //1 * 27 + 2* 9 =  27 + 18 = 45
//   let arr1 =n.toString(3).split('').reverse().map(v=>Number(v))
//  console.log(arr1)
//   let result = 0
 
//   for(let i =0; i < arr1.length; i++){
//    // console.log(Math.pow(3,arr1.length-i-1))
// 	console.log( arr1[i] * Math.pow(3,arr1.length-i-1))
//     result = result + ( arr1[i] * Math.pow(3,arr1.length-i-1))
//   }
//    return result
// }


const solution = (n) => {
    // return parseInt([n.toString(3)].reverse().join(""), 3);
  let arr1 = parseInt(n.toString(3).split('').reverse().join(''),3)
  return arr1
}