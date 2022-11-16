let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
inputs.pop();

for (let i = 0; i < inputs.length; i++) {
  let input = Number(inputs[i]);

  let input2 = input * 2;

  let isPrimeNumber = Array(input2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  function PrimeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
      if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= input2) {
          isPrimeNumber[i * m] = false;
          m++;
        }
      }
    }
    let results = [];

    for (let i = input + 1; i <= input2; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNumber();
}
