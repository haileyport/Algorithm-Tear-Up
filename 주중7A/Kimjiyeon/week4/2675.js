// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
// 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
// S에는 QR Code "alphanumeric" 문자만 들어있다.
// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const arr = input.map(x=>x.split(" "))
const arr2 = arr.filter(x => x.length !==1)
const output = []
arr2.map(x=>{
    x[0]=Number(x[0])

    for(let i=0; i<x[1].length; i++){
        output.push(x[1].charAt(i).repeat(x[0]))
    }
    output.push('\n')
})
console.log(output.join("").trimEnd());
