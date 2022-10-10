let input = require("fs").readFileSync("4_14681.txt").toString().split("\n");

let x = Number(input[0]);
let y = Number(input[1]);
// +x +y -> 1
// -x +y -> 2
// -x -y -> 3
// +x -y -> 4

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x > 0 && y < 0) {
  console.log(4);
}

////// readline module //////

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(parseInt(line));
// }).on("close", function () {

//   let x = Number(input[0]);
//   let y = Number(input[1]);

//   // +x +y -> 1
//   // -x +y -> 2
//   // -x -y -> 3
//   // +x -y -> 4

//   if (x > 0 && y > 0) {
//     console.log(1);
//   } else if (x < 0 && y > 0) {
//     console.log(2);
//   } else if (x < 0 && y < 0) {
//     console.log(3);
//   } else if (x > 0 && y < 0) {
//     console.log(4);
//   }
//
//   process.exit();
// });
