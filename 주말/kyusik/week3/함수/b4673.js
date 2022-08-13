let arr = [];

for (let i = 1; i <= 10000; i++) {
  let n = 0;
  let numberToString = String(i);
  for (let j = 0; j < numberToString.length; j++) {
    n += parseInt(numberToString[j]);
  }
  let selfNum = i + n;
  arr.push(selfNum);
}

for (let i = 1; i <= 10000; i++) {
  if (!arr.includes(i)) {
    //answer += i + "\n";
    console.log(i);
  }
}
//신경호님 문제 참고하자.
//console.log(answer);