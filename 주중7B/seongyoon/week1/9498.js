var input = require('fs').readFileSync('/dev/stdin').toString();

var a = parseInt(input);
if (a <= 100 && a >=90) {
    console.log('A');
} else if (a <= 89 && a >=80) {
    console.log('B');
} else if (a <= 79 && a >=70) {
    console.log('C');
} else if (a <= 69 && a >=60) {
    console.log('D');
} else {
    console.log('F');
}