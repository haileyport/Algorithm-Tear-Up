// [PGS] 약수의 개수와 덧셈 / leve1
// 난이도 :  level 1
// 풀이시간 : 30분
// 점수 : 1

/*
문제
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
입출력 예
left	right	result
13	17	43
24	27	52
입출력 예 설명
입출력 예 #1

다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
13	1, 13	2
14	1, 2, 7, 14	4
15	1, 3, 5, 15	4
16	1, 2, 4, 8, 16	5
17	1, 17	2
따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
입출력 예 #2

다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
24	1, 2, 3, 4, 6, 8, 12, 24	8
25	1, 5, 25	3
26	1, 2, 13, 26	4
27	1, 3, 9, 27	4
따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.
*/

/*
< 의사코드 >
1. 빈배열을 num으로 선언하고 result를 숫자형태로 선언한다
2. for문으로 left부터 right까지 돌면서 num 배열을 완성한다
3. 완성한 num배열 길이만큼 for문을 돌면서 약수가 짝수인지 홀수인지 확인한다.
4. 약수가 for문 안의 if문 안에서 새로운 arr 배열을 만들어서 약수만 배열에 넣고 arr의 길이를 삼항연산자로 확인하면서
    길이가 짝수일 경우에는 result에 해당 약수를 더해주고 홀수일 경우에는 빼준다
5. return result
*/
   
function solution(left, right) {
    let num = [];
    let result = 0;
    for(let i = left; i <= right; i++) {
        num.push(i);
    }
    for(let i = 0; i < num.length; i++) {
        for(let j = 1; j <= num[i]; j++) {
            if(num[i] % j === 0) {
                let arr = [];
                arr.push(j)
                arr.length % 2 === 0 ? result += num[i] : result -= num[i];
                
                
            }
        }
    }
    return result;
}
/*
  실패
  엄청난 숫자가 나와벌인다 호달달..
  테스트 1
입력값 〉	13, 17
기댓값 〉	43
실행 결과 〉	실행한 결괏값 -256이 기댓값 43과 다릅니다.
테스트 2
입력값 〉	24, 27
기댓값 〉	52
실행 결과 〉	실행한 결괏값 -479이 기댓값 52과 다릅니다.

과정을 좀 정리해본다
for문도 줄여보고
for문 안에서 배열을 생성한다
*/

function solution(left, right) {

    let result = 0;
    for(let i = left; i <= right; i++) {
        let num = [];
        for(let j = 0;j <= i;j++) {
            if(i % j === 0) {
                num.push(j)
            }
            
        }
        num.length % 2 === 0 ? result += i : result -= i 
    }
      return  result
}

/*
 테스트 1 〉	통과 (6.19ms, 36.8MB)
테스트 2 〉	통과 (2.80ms, 36.7MB)
테스트 3 〉	통과 (4.21ms, 36.7MB)
테스트 4 〉	통과 (2.27ms, 36.7MB)
테스트 5 〉	통과 (5.64ms, 36.9MB)
테스트 6 〉	통과 (0.58ms, 33.4MB)
테스트 7 〉	통과 (0.30ms, 33.5MB)
*/