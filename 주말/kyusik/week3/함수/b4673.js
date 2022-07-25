let arr = [];

for (let i = 1; i <= 10000; i++) {
  let N = 0;
  let numberToString = String(i);
  for (let j = 0; j < numberToString.length; j++) {
    N += parseInt(numberToString[j]);
  }
  let selfNum = i + N;
  arr.push(selfNum);
}

for (let i = 1; i <= 10000; i++) {
  if (arr.includes(i)) {
    //answer += i + "\n";
    console.log(i);
  }
}

//console.log(answer);