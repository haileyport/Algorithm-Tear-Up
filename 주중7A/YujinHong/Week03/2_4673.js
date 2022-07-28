function d(num) {
  const numArr = String(num).split("");

  let sum = num;

  for (let i = 0; i < numArr.length; i++) {
    sum += Number(numArr[i]);
  }

  return sum;
}

function solution(num) {
  const numsArr = [];

  for (let i = 1; i <= num; i++) {
    numsArr[d(i)] = 1;
  }

  for (let i = 1; i <= num; i++) {
    // 셀프 넘버면
    if (numsArr[i] !== 1) {
      console.log(i);
    }
  }
}

solution(10000);
