let input = require('fs').readFileSync('/dev/stdin').toString();

let n = +input;
function f(x) {
    x = String(x);
    if (Number(x[0])-Number(x[1])===Number(x[1])-Number(x[2])) {
        return true;
    }
    return false;
}

if (n<=99) {
    console.log(n);
} else if (n>=100 && n<=999) {
    let count = 99;
    for (i=100; i<=n; i++) {
        if (f(i)) {
            count += 1;
        }
    }
    console.log(count);
} else {
    console.log(144);
}