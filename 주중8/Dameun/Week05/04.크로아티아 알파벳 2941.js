let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().split('');

// let count = 0;
// let length = input.length

// for(let n = 0; n<arr.length;){
//     if(input.indexOf(arr[n]) !== -1 && arr[n] === 'dz='){
//         length = length - 2
//         input = input.substring(0,n) + input.substring(n+3);
//     }else if(input.indexOf(arr[n]) !== -1){
//         length = length -1
//         input = input.substring(0,n) + input.substring(n+2);
//     }else{
//         count++;
//         n++;
//     }
// }
//     console.log(input);

    //위 방식으로 하니까 문제...
    //없어지고 합쳐지는 과정에서 새로 생긴다


const arr = [ 'dz=','c=','c-','d-','lj','nj','s=','z=' ];
let length = 0;

for(let n = 0; n<arr.length;){
    if(input.indexOf(arr[n]) !== -1 && n === 0){
        length++
        input = input.replace(arr[n] , '   ')
    }else if(input.indexOf(arr[n]) !== -1){
        length ++;
        input = input.replace(arr[n] , '  ')
    }else{
        n++;
    }
}
//해당 문제를 공백으로 대신 채운다.
    
for(let n of input){
    if(n !== ' '){
        length++;
    }
}
//공백이 아닌 문자만 세서 카운트한다
console.log(length);

//132ms
//9352KB




