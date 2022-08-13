const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num1 =input.shift() //테스트케이스의 수


 const sortes = input.sort((a,b)=> a - b);
 //sort메소드를 이용 문자열일때는 a-b를 안해도 되지만 숫자일때는 해줘야한다고 합니다.
 for(let i= 0; i<num1; i++){
     console.log(sortes[i])
 }//sort를 이용해 숫자를 정렬하고 정렬한 숫자들을 반복문을써서 출력합니다