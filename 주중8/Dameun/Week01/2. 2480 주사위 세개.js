let fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split(' ');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');


let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);


//같은 눈 3개 > 10000 + n000
//같은 눈 2개 > 1000 + n00
//모두 다른 눈 > n00
if(a === b && a === c){
    console.log(10000+(a*1000));
}else if(a === b || a === c ){
    console.log(1000+(a*100));
}else if(c === b){
    console.log(1000+(b*100));
}else{
    if(a>b && a>c){
        console.log(a*100);
    }else if(b>c){
        console.log(b*100);
    }else{
        console.log(c*100);
    }
}