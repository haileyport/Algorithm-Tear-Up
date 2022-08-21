// 문자열  2941_크로아티아 알파벳 식 조차도 실패
// 난이도 : 실버5
// 풀이시간 : 분
// 메모리 :	  KB      
// 시간 :   ms      
// 코드길이 :  B


/*
크로아티아 알파벳 표
č	c=
ć	c-
dž	dz=
đ	d-
lj	lj
nj	nj
š	s=
ž   z=
목록에 없는 알파벳은 한글자씩 센다.
*/

// 1. 

/*
1. 크로아티아 알파벳 배열을 만들어서 만약 배열의 요소와 같을 경우 count를 하나 올리고 기존 문자열에서 해당 요소를 지운다
2. 나머지 문자열에서 "-"와 "="를 제거한다
3. 남은 문자열 길이와 모인 count를 더해서 console.log로 출력
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// let input = "ljes=njak"

const croatiaArr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']



let outOfCroatiaTable;
let count = 0;
for(let i = 0; i < input.length; i++)  {
    for(let j = 0; j < croatiaArr.length; j++) {
        if(input[i] === croatiaArr[j]) {
            count++
        }
    }
}
// 카운트 0..?

// 기존 input을 쪼개버리면 크로아티아 알파벳도 쪼개져서 쪼개서 확인할수없음..
