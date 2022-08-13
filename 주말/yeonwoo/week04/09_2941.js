const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("");

// const input = 'dz=ak'.trim().split(''); console.log(input);

let count = input.length;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "=") {
    if (input[i - 1] === "c" || input[i - 1] === "s") count--;
    else if (input[i - 1] === "z") {
      if (input[i - 2] === "d") count = count - 2;
      else count--;
    }
  } else if (input[i] === "-") {
    if (input[i - 1] === "c" || input[i - 1] === "d") count--;
  } else if (input[i] === "j") {
    if (input[i - 1] === "l" || input[i - 1] === "n") count--;
  }
}

console.log(count);
