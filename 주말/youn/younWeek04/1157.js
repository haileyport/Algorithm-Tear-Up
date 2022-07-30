let mostFrequentChar = '';
let count = 0;

for (let idx = 0; idx < input.length; idx++) {
  if (input.split(input[idx]).length > count) {
    count = input.split(input[idx]).length;
    mostFrequentChar = input[idx];
  } else if (input.split(input[idx]).length === count && input[idx] !== mostFrequentChar) {
    mostFrequentChar = '?';
  }
}

console.log(mostFrequentChar);