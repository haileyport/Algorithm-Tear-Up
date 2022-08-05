let input = require('fs').readFileSync('/dev/stdin').toString();
let n = +input;
let arr = [];
function d(n) {
    let N = n.toString().split('');
    return n+N.reduce((a, b)=>a+Number(b), 0);
}
for (let i=1; i<=n; i++) {
    if(d(i)===n){
        arr.push(i);
    }
}
if (arr.length) {
    console.log(Math.min.apply(null, arr));
} else {
    console.log(0);
}