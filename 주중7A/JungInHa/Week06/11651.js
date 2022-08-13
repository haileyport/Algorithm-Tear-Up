const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

let result = ''
input.shift();

let coordinates = input.map(x => x.split(" "));

coordinates.sort(function(a, b) {
  if (a[1] !== b[1]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
});

coordinates.forEach(coor => {
  result += `${coor[0]} ${coor[1]}\n`;
})

console.log(result);