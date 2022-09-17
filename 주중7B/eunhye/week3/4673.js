//셀프넘버

function d(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }
  return n + result;
}

const range = 10000;
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  selfNumbers[d(i)] = false;
}

for (let i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}
