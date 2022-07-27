/*
0부터 1000까지에서 셀프 넘버 구하기 
1의 자리: n + n = 2n
10의 자리: n + 10n + 1n 
100의자리: n + 100n + 10n + 1n
10000의자리: n + 1000n + 100n + 10n + n

중복을 없애고 정렬로 만듦
*/

/*

*/
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

/*
function solution(inputnum2) {
  let notSelfNum = [];
  for (let i = 0 ; i <= inputnum2; i++){
    if (i < 10){
      let prompt = i + i;
      notSelfNum.push(prompt)
    }else if (i >= 10 && i <= 99){
      let prompt = i + Number(String(i)[0]) + Number(String(i)[1]);
      notSelfNum.push(prompt);
    }else if (i >=100 && i <= 999){
      let prompt = i + Number(String(i)[0]) + Number(String(i)[1]) + Number(String(i)[2]);
      notSelfNum.push(prompt);
    }else if (i >= 1000 && i <= 9999){
      let prompt = i + Number(String(i)[0]) + Number(String(i)[1]) + Number(String(i)[2]) + Number(String(i)[3]);
      notSelfNum.push(prompt);
    }else if (i === 10000){
      let prompt = i + Number(String(i)[0]) + Number(String(i)[1]) + Number(String(i)[2]) + Number(String(i)[3]) + Number(String(i)[4]);
    }
  }
  return notSelfNum;
}
let compareArr = solution(10000);
// console.log(compareArr);
*/
// console.log(numberToBeInserted.filter(x => !compareArr.includes(x)));
