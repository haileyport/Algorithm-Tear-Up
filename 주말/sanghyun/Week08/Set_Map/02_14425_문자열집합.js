let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./02_14425.txt').toString().trim().split('\n');

function solution(income){
  let dicIndex = income[0].split(' ').map(Number)[0];
  let dictionary = new Set(income.slice(1, dicIndex + 1))
  let toLook = (income.slice(dicIndex + 1));
  // console.log(dictionary);
  // console.log(toLook);
  console.log(toLook.filter(el => dictionary.has(el)).length);

}
solution(input)
/*
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(income){
  let dicIndex = income[0].split(' ').map(Number)[0];
  let dictionary = new Set(income.slice(1, dicIndex + 1))
  let toLook = new Set(income.slice(dicIndex + 1));
  // console.log(dictionary);
  // console.log(toLook);
  console.log([...toLook].filter(el => dictionary.has(el)).length);

}
solution(input)
*/