//하노이탑 이동순서
const input = require('fs').readFileSync('/dev/stdin').toString();
//num : 원반의 개수
//from : 출발지 기둥번호
//to : 목적지 기둥번호
// oter : s나머지 기둥번호
let num = Number(input)
let count =  0
let answer = []
function hanoi (num, from, other, to) {
    if( num === 0) {return} else{
        hanoi( num-1, from, to, other);
        answer.push([from,to])
        count++
        hanoi(num-1, other, from, to)
    
    }
   
}
hanoi(num, '1' , '2' ,'3')

console.log(count)
console.log(answer.map((i)=> i.join(" ")).join("\n"))

