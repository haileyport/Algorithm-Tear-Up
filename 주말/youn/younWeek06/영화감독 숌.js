const n = +require("fs").readFileSync("/dev/stdin").toString()

let num = 666
let count =1

while(count !== n){
    num ++
    if(String(num).includes('666')){
        count++
    }
}
console.log(num)