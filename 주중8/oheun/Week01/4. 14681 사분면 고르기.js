/*흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. 
"Quadrant n"은 "제n사분면"이라는 뜻이다.

input : 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
** 여러 줄로 주어짐.

제 1사분면 : x 양수 y 양수
제 2사분면 : x 음수 y 양수
제 3사분면 : x 음수 y 음수
제 4사분면 : x 양수 y 음수
 */

// 여러 줄 입력 받음
// 틀린 이유 : 입력 문제 파일에 접근하는 것으로 인해 fs는 에러가 발생 -> readline으로 대체할 것
// readFileSync(0)으로 대체하는 방법도 존재 => 했더니 맞음.
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const x = Number(input[0]);
const y = Number(input[1]);

if (x>0 && y>0){
    console.log('1');
}else if(x<0 && y>0){
    console.log('2');
}else if(x<0 && y<0){
    console.log('3');
}else{
    console.log('4');
}