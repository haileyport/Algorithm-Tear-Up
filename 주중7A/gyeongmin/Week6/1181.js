//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

//중복값 제거
const set = new Set(input);
const notDup = [...set];

//길이순으로 정렬
notDup.sort(function(a, b) {
    return a.length - b.length || // sort by length, if equal then
           a.localeCompare(b);    // sort by dictionary order
  });
console.log(notDup.join('\n'))
