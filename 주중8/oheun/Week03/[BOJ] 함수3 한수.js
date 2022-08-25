/*
통과 여부 : 통과
공간 복잡도 : 9620 KB
시간 복잡도 : 124 ms

시간제한 : 2초
메모리 제한 128MB

input : 1 <= N <=1000
output : 한수의 개수

1065번 한수
* 한수란? 어떤 양의 정수 X의 각 자리가 등차 수열을 이룰 때
* 등차수열이란? 연속된 2개의 수의 차이가 일정한 수열

1보다 크거나 같고, N보다 작거나 같은 한수의 개수 출력
*/

/*
** 아이디어
1. string을 이용해서 slice로 자리수를 구분할 수 있을 것 같다.
2. (의사코드 작성하다 추가) 등차수열이라면 f(n)-f(n-1) = d이니까 각 차이마다 별도의 변수를 추가하지 않아도,
    공차를 저장하고 비교하면 되지 않을까?
3. (코드 작성하던 중) 그냥 함수 안에 이중 for문을 써서 돌아간다면 왜 함수를 써야하지? input 때문에?
    - for문을 함수 밖에서 해보는 건 어떨까? => 이것 때문에 if문 에러 발생
4. (코드 작성하던 중) 여러 d를 저장하고 index 탐색으로 찾기 위해 배열로 검색하고 찾아볼까?
5. 자리수별로 차이가 있지 않을까?
    - 두 자릿수까지는 어차피 차이가 하나 밖에 없어서 일정하다.
    - 세 자릿수부터 비교하면 될 듯
    - 네 자릿수는 1000만 있는데, 등차수열에 해당되지 않는다.

** 의사코드
0. 변수
    입력을 불러와 input에 저장한다.                             => input
    input 값으로 함수에 전달된다.                               => 함수 Hansoo의 매개변수 input
    한수의 개수를 의미하는 변수 count를 선언한.                 => count

1. 함수
    1.1. 1부터 input까지의 반복문을 실행한다.
    1.2. 두 자릿수(<100)는 모두 count++한다.
    1.3. 세 자릿수는 문자열로 변환하여 0,1 인덱스의 차와 1,2 인덱스의 차를 비교한다.
    1.4. 공차가 같으면 count ++한다.

*/

/*

문제 해결이 안되는 이유 : for문을 함수 밖에서 실행해서 if문만 실행됨.

*/

// 0. 변수 선언
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();   // string형으로 불러옴.
//let input = '210';
let count = 0;                  // 한수의 개수

// 1. 함수
function Hansoo(input) {        // 전달인자를 input으로 저장
    //1.1. 1부터 input까지의 반복문을 실행한다.
    for (let i = 1; i<=input; i++){
        
        if (i <100){            // 1.2. 두 자릿수(<100)는 모두 count++한다.
            count++;
        }else if(100 <=i && i < 1000){
            let strInput = i.toString();
            let compareFirst = Number(strInput[0]-strInput[1]);
            let compareSecond =Number(strInput[1]-strInput[2]);

            // 1.3. 세 자릿수는 문자열로 변환하여 0,1 인덱스의 차와 1,2 인덱스의 차를 비교한다.
            if (compareFirst === compareSecond){
                // 1.4. 공차가 같으면 count ++한다.
                count++;

            }
        }
    } 
    console.log(count);
}
Hansoo(input);
