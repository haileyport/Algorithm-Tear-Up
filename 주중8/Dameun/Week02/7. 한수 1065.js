let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input[0]);
let count = 0;

if(a < 100){
    console.log(a);
}else{ 
    for(let n= 100; n<=a; n++){
    let insertNumber = String(n);
    let headNumber = Number(insertNumber[0]);
    let bodyNumber = Number(insertNumber[1]);
    let tailNumber = Number(insertNumber[2]);
        if((headNumber - bodyNumber) === (bodyNumber -tailNumber)){
            count++
        }   
    }
    console.log(count + 99);
}