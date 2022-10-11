let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let one = input[0];
let two = input[1];
let three = input[2];

  if (one === two && two === three){
    console.log(10000+(one * 1000));
  }else if (one === two){
    console.log(1000+(one * 100));
  }else if (one === three){
    console.log(1000+(one * 100));
  }else if (two === three){
    console.log(1000+(two * 100));
  }else{
    let arr = [one, two, three]
    arr.sort((a, b) => b - a)
    console.log(arr[0]*100);
  }


// function solution (one, two, three) {
//   if (one === two && two === three){
//     return 10000+(one * 1000);
//   }else if (one === two){
//     return 1000+(one * 100);
//   }else if (one === three){
//     return 1000+(one * 100);
//   }else if (two === three){
//     return 1000+(two * 100);
//   }else{
//     let arr = [one, two, three]
//     arr.sort((a, b) => b - a)
//     return arr[0]*100;
//   }
// }