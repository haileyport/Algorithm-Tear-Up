let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./07_2908.txt').toString().trim().split(' ');

let guenOne = input[0];
let guenTwo = input[1];

let sooOne = Number(guenOne.split('').reverse().join(''));
let sooTow = Number(guenTwo.split('').reverse().join(''));

if(sooOne > sooTow){
  console.log(sooOne);
}else{
  console.log(sooTow);
}