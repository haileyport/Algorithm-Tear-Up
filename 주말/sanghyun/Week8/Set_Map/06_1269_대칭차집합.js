let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./06_1269.txt').toString().trim().split('\n');

function difference(setA, setB) {
  const diff = new Set(setA);

  for (const elem of setB) {
      diff.delete(elem);
  }

  return diff;
}


function getDifference(setA, setB) {
  return new Set(
    [...setA].filter(element => !setB.has(element))
  );
}

function arryFilter(arr1, arr2){
  return arr1.filter(el => {
    return !arr2.includes(el);
  });
}

function solution(income){

  // 이것도 맞음
  let first = new Set(income[1].split(' ').map(Number));
  let second = new Set(income[2].split(' ').map(Number));
  let firstLength = [...difference(first, second)].length;
  let secondLength = [...difference(second, first)].length;
  console.log(firstLength + secondLength);

  /* 맞음
  let first = new Set(income[1].split(' ').map(Number));
  let second = new Set(income[2].split(' ').map(Number));
  let firstLength = [...getDifference(first, second)].length;
  let secondLength = [...getDifference(second, first)].length;
  console.log(firstLength + secondLength);
  /*

  /* filter이용 시간초과

  let first = income[1].split(' ').map(Number);
  let second = income[2].split(' ').map(Number);
  console.log(arryFilter(first, second).length + arryFilter(second, first).length)


  let comp1 = first.filter(el => {
    return !second.includes(el);
  });
  let comp2 = second.filter(el => {
    return !first.includes(el);
  });
  let result = comp1.length + comp2.length;
  console.log(result);
  */
};

solution(input);