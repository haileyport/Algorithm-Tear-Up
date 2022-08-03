const fs = require('fs')
const input = Number(fs.readFileSync('/dev/stdin').toString())


function primeFactors(n){
    while (n%2 == 0) {
        console.log(2)
        n = n/2
    }
    // 이제 n은 홀수 -> 이미 2의 배수를 판별했기때문에 2씩 증가시킬 수 있음
    for (var i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
            console.log(i)
            n = n/i
        }
    }
    if (n>2) {
        console.log(n)
    }
}
primeFactors(input)