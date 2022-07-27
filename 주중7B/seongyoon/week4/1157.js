let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let str = input.toUpperCase();

let obj = {};

for(let i=0;i<str.length;i++){
    if(str[i] in obj){
        obj[str[i]]+=1;
    }else{
        obj[str[i]]=1;
    }
}

let result ='';
let count =0;
for(let property in obj){
    if(obj[property]>count){
        result=property;
        count=obj[property];
    }
    else if(obj[property]===count){
        result='?';
    }
}
console.log(result);