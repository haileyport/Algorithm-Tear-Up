const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift();

let words = [];
input.map((word) => {
  if (!words.includes(word)) {
    words.push(word)
  }
})
words.sort();
words.sort(function(a, b) {
  return a.length - b.length;
});

words.map(word => console.log(word))