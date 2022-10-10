let input = Number(require("fs").readFileSync("10_2439.txt"));

let arr1 = [];
let star = "";
let arr2 = [];
let blank = "";

for (let i = 1; i <= input; i++) {
  star = star + "*";
  arr1.push(star);
  blank = blank + " ";
  arr2.push(blank);
}

arr2.pop();
arr2.reverse();
arr2.push("");

for (let i = 0; i < input; i++) {
  console.log(arr2[i] + arr1[i]);
}

// let num = Number(input);

// for (let i = 0; i < num; i++) {
//   let star = "";

//   for (let j = num - 1; j >= 0; j--) {
//     star += j <= i ? "*" : " ";
//   }

//   console.log(star);
// }
