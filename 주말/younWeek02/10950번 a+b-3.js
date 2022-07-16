let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//위가 배열이지..테스트케이스의 개수가 ㅅ\t이다 한줄로 주어져있음
 //[5 ,[1,1],[2,3],[3,4],[9,8],[5,2]] 이런식인듯..
let count = input[0] //5
for(let i = 1; i <=count ; i++ ){
    //먼저 배열안의 요소배열을 꺼내서 split하기
    let arr = input[i].split(" ");
    a = Number(arr[0]);
    b = Number(arr[1]);
   console.log(a+b);//안에다 써도되남
}




