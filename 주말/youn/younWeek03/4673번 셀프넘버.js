let arr = [];
let ans = [];

for (let i = 1; i <= 10000; i++){
  let sum = 0;
  let strNum = String(i);
  for (let k = 0; k < strNum.length; k++){
    sum += Number(strNum[k]);
  }
  let newNum = i + sum;
  arr.push(newNum);
}

for (let i = 1; i <= 10000; i++){
  if (arr.indexOf(i) === -1){
    ans += i + '\n';
  }
}

console.log(ans);