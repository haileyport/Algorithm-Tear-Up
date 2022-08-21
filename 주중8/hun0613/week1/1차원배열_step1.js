let fs = require('fs');
const { parse } = require('path');
const { isReadable } = require('stream');
let input = fs.readFileSync('input.txt').toString();

let arr = input.split('\n');
let arr2 = arr[1].split(' ');

let min = parseInt(arr2[0]);
let max = parseInt(arr2[0]);


for(let i = 0; i < arr2.length; i++){
    if(min > parseInt(arr2[i])){
        min = parseInt(arr2[i]);
    }
    if(max < parseInt(arr2[i])){
        max = parseInt(arr2[i]);
    }
}


console.log(min, max);