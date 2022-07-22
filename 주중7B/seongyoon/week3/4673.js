let arr = [];
let result = '';
function d(n) {
    n = String(n);
    return Number(n)+n.split('').map(Number).reduce((a, b)=>a+b);
}
for (let i=1; i<=10000; i++) {
    arr.push(d(i));
    if (!(arr.includes(i))) {
        result += i + '\n';
    }
}
console.log(result);