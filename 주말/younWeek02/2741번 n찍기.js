const fs =require('fs')
const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
//여러줄이니 \n을 사용 하고 기본툴?넣기
let num = Number(input[0]);//입력값에 들어오는 값을 차례대로 줄로 출력해야함 그러므로 입력값이 반복횟수임
let result = '';//빈문자열 선언
for(let i = 1 ; i <= num; i++){//반복문을 싸줌 1투어이니 초기화도 1부터시작
     result = result + i +'\n';
}//i가 더해질때마다 값이 출력되야하므로 빈배열에 i의 값을 넣음 그리고 줄마다라고 했으니
// \n으로 줄바꿈을 해준다
console.log(result);//이걸 안에다 넣으면 출력초과가 뜬다