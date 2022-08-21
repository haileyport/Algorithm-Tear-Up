//const fs = require('fs');
const input = "2\n3 ABC\n5 /HTP".trim().split("\n");

//const input = ['3', 'ABC'];

const num = Number(input[0]);
input.shift();

let result = "";

input.forEach((str) => {
  const strArr = str.split(" ");
  strArr[1].split("").forEach((el) => {
    for (let i = 0; i < Number(strArr[0]); i++) {
      result = result + el;
    }
  });
  result = result + "\n";
});

console.log(result);
