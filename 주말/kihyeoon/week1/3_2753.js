let input = +require("fs").readFileSync("3_2753.txt");

// 4의 배수일 때-> 1
// 100의 배수일 때 -> 2
// 400의 배수일 때 -> 1
// 나머지 -> 2
let result = 0;
if (input % 4 === 0) {
  result = 1;
}
if (input % 100 === 0) {
  result = 0;
}
if (input % 400 === 0) {
  result = 1;
}
console.log(result);

// if ((A % 4 === 0 && A % 100 !== 0) || A % 400 === 0) {
//   console.log("1");
// } else {
//   console.log("0");
// }
