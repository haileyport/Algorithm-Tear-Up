const fs =require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]); //길이는 5
//정렬이 왼쪽이 아닌 오른쪽으로 되어잇음
//n만큼의 길이에 끝에서 *가 늘어나는 형식 즉 1 부터 시작하므로 *한개를 무조건 가지고있음
// (i-1)만큼 공백으로 치환을 해주는 것
//padstat를 쓰면 num만큼 길이에서 문자가 없는 빈공간 앞에 다른걸로 치환이 가능함
//그이후에 *을 하나씩 붙여나가는 형식
let arr = '*';
for(let i =num; i >= 1 ; i --){// 5일때 
   console.log(arr.padStart(num, ' '));
    arr =arr + '*';
}