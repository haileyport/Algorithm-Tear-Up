let fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let c = parseInt(input[2]);


//0<=n<=99
//10미만 이라면 0n
//floor(n/10)+(n%10) = 결과값 
// 새로운 수 : (n%10)*10 + (result%10) === n
let newNumber = a;
let result;
let i = 1;
// result = Math.floor(newNumber/10) + (newNumber%10) ;
// console.log(result);
while(true){
    result = Math.floor(newNumber/10) + (newNumber%10);
    newNumber = (newNumber%10)*10 + (result%10)
    if(newNumber === a){
        break;
    }
    i = i +1;
}


console.log(i);

