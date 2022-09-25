let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./09_2941.txt').toString().trim();

const croAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

let before = input;

for (let i = 0; i < croAlpha.length; i++){ //lj
  let croLength = croAlpha[i].length; //2
  console.log('이번 문자는: ' + croAlpha[i]);
  if(before.length !== 0){ // 11
    before = before.replaceAll(croAlpha[i], '2'); // 7
    console.log("바뀐?? " + before);
  }
}

console.log(before.length);
