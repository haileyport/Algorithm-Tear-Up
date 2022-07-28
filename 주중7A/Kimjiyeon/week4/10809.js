//알파벳 소문자로만 이루어진 단어 S가 주어진다.
//각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성



const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()
const arr =[]

for(let i='a'.charCodeAt(); i<='z'.charCodeAt(); i++){
    arr.push(input.indexOf(String.fromCharCode(i)));
}
console.log(arr.join(' '))
