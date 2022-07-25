let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
//console.log(input) //['Mississipi']

//대문자로 바꾸기
let S = input[0].toUpperCase();//MISSISSIPI
let upperArr = {};
let num = 0;
for(let i = 0; i < S.length; i++){
    if(upperArr[S[i]] === undefined){
        upperArr[S[i]] = 1;
    }else{
        upperArr[S[i]] ++
    }
    num = Math.max(upperArr[S[i]])
}
//console.log(upperArr) //{M: 1, I: 4, S: 4, P: 1}
//console.log(num) //4
let result = '';
for(key in upperArr){
    if(upperArr[key] === num){
        result = key;
    }else if(result !== ''){
        result = '?';
    }    
}
console.log(result)
