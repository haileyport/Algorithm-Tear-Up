let fs = require('fs');

let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let s = [a, b, c]
//a=b=c >10000+a*1000
//a=b b=c c=a > 1000+ a*100
//a !== b 다다를때 가장 큰눈 *100

    if(a === b && b=== c && c===a){ 
    console.log(10000 + (a*1000));}
    
     else if(a ===b || b === c || c===a){
        if( a===b || b===c){
            console.log(1000 + (b*100));
        }else {
            console.log(1000 + (c*100));
        }
    }
    


    else if(a !==b && b !== c && c !== a){
    console.log(Math.max(...s) * 100);
    }

    
