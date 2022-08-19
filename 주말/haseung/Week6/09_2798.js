const inputs = ["5 21", "5 6 7 8 9"];

const cardNumber = inputs[0].split(" ");
// console.log(cardNumber); // ["5 21"]
const cardElement = inputs[1].split(" ").map((element) => Number(element));
// console.log(cardElement); // [ 5, 6, 7, 8, 9 ]

const N = Number(cardNumber[0]);
const M = Number(cardNumber[1]);
// console.log(N, M); // 5 21
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      //   console.log(i, j, k);

      const sum = cardElement[i] + cardElement[j] + cardElement[k];
      //0 1 2 => 5 6 7 // 18
      // 0 1 3 => 5 6 8 // 19
      // 0 1 4 => 5 6 9 // 20
      // 0 2 3 => 5 7 8 // 20
      // 0 2 4 => 5 7 9 // 21
      // 0 3 4 => 5 8 9 // 22
      // 1 2 3 => 6 7 8 // 21
      // 1 2 4 => 6 7 9 // 22
      // 1 3 4 => 6 8 9 // 23
      /* Printing the gap between the sum of the three numbers and the M. */
      // 2 3 4 => 7 8 9 // 24
      const gap = M - sum;
      //   console.log(gap);
      //   3;
      //   2;
      //   1;
      //   0;
      //   1;
      //   0
      //  - 1;
      //    0
      //   - 1
      //     2
      //   - 3;

      if (gap >= 0 && answer <= sum) {
        answer = sum;
        // console.log(answer);
        // 18
        // 19
        // 20
        // 20
        // 21
        // 21
      }
    }
  }
}
console.log(answer);
