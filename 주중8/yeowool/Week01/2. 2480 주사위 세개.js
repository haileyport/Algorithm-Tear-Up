const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ');
// input을 가져와서 index번호로 호출 할 수 있도록 공백으로 나눈다.

const n1 = Number(input[0]); 
const n2 = Number(input[1]); 
const n3 = Number(input[2]); // n1~3를 선언하여 입력받은 세 개의 숫자를 각각 할당한다.

if(n1 === n2 && n1 === n3 && n2 === n3) { // 숫자가 같은 경우를 제일 바깥 if문으로 하고 
        console.log(10000 + n1 * 1000);   // 이후 조건들을 제일 큰 if문 안에서 작성한다.
   } else {                               
        if(n1 === n2) {
        console.log(1000 + n1 * 100);
        } else if (n1 === n3) {
        console.log(1000 + n1 * 100);
        } else if(n2 === n3) {
        console.log(1000 + n2 * 100);
        }
    }
    if(n1 !== n2 && n1 !== n3 && n2 !== n3) {
        console.log(Math.max(n1, n2, n3) * 100);
    }