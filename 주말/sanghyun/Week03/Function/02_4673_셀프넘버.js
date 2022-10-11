/*
0부터 1000까지에서 셀프 넘버 구하기 
1의 자리: n + n = 2n
10의 자리: n + 10n + 1n 
100의자리: n + 100n + 10n + 1n
10000의자리: n + 1000n + 100n + 10n + n

중복을 없애고 정렬로 만듦
*/

// function selfNum (num){
//   /* 셀프넘버 만들기 */
//   let arr = [];
//   for (let i = 1 ; i <= num; i++){
//     if(String(i).length = 1){
//       let prompt = i * 2;
//       arr.push(prompt);
//     }else if (String(i).length = 2){
//       // 자신 + 10의자리 + 1의 자리
//       let prompt = i + Math.floor(i % 100 / 10)  + Math.floor(i % 10 / 1)
//       arr.push(prompt);
//     }else if (String(i).length = 3){
//       //자신 + 100의자리 + 10의자리 + 1의자리
//       let prompt = i + Math.floor(i % 1000 / 100) +  Math.floor(i % 100 / 10)  + Math.floor(i % 10 / 1)
//       arr.push(prompt);
//     }else if (String(i).length = 4){
//       //자신 + 1000의자리 + 100의자리 + 10의자리 + 1의자리
//       let prompt = i + Math.floor(i % 10000/ 1000) + Math.floor(i % 1000 / 100) +  Math.floor(i % 100 / 10)  + Math.floor(i % 10 / 1)
//       arr.push(prompt);
//     }
//   }
//   let result = [...new Set(arr)];
//   return result;
// }

// function justArr(input){
//   let output = []
//   for(let i = 1; i <= input; i ++){
//     output.push(i);
//   }
//   return output;
// }

// let gotSelfNum = selfNum(10000);
// let gotJustArr = justArr(10000);
// console.log(gotJustArr);
// console.log(gotSelfNum);
// let diff = gotJustArr.filter(x => !gotSelfNum.includes(x));
// console.log(diff);


let outputarr = [];
for (let i = 1; i <= 10000; i++) {
  let instance = i
  for (let j = 0; j < String(i).length; j++) {
    instance += Number(String(i)[j]);
  }
  outputarr.push(instance);
}
let finaleSelfNum = [...new Set(outputarr)].sort((a, b) => a - b);
// console.log(finaleSelfNum)

let justArr = []
for (let i = 1; i <= 10000; i++) {
  justArr.push(i);
}
// console.log(justArr)


let notSelfNum = justArr.filter(x => !finaleSelfNum.includes(x));
let answer = '';
for (let i = 0; i < notSelfNum.length; i++){
  if (notSelfNum[i] !== 'undefined'){
    answer += notSelfNum[i] + '\n';
  }
}
console.log(answer);




// let arr = [];

// for (let i = 1; i <= 10000; i++) {
//   let N = 0;
//   let stringNumber = String(i);
//   for (let j = 0; j < stringNumber.length; j++) {
//     N += Number(stringNumber[j]);
//   }
//   let nNum = i + N;
//   arr.push(nNum);
// }
// console.log(arr);

/*
function arrayConstructor (num){
  let outputarr = []
  for (let i = 1 ; i <= num; i++){
    outputarr.push(i);
  }
  return outputarr;
}
let numberToBeInserted = arrayConstructor(10000);
// console.log(numberToBeInserted);
let arr = [];

for (let i = 1; i <= 10000; i++) {
  let N = 0;
  let stringNumber = String(i);
  for (let j = 0; j < stringNumber.length; j++) {
    N += Number(stringNumber[j]);
  }
  let nNum = i + N;
  arr.push(nNum);
}
// console.log(arr);

console.log(numberToBeInserted.filter(x => !arr.includes(x)));
*/