// [PGS] 없는 숫자 더하기 / leve1
// 난이도 :  level 1
// 풀이시간 :  
// 점수 :   .  

/*
문제
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.
입출력 예
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6
입출력 예 설명
입출력 예 #1

5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
입출력 예 #2

1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
*/


/*
< 의사코드 >
1. includes를 사용하여 0부터 9까지 numebrs배열에 있는지 확인한다.
2. 확인은 for문으로 순회하기
+1점
*/
function solution(numbers) {
    let result = 0;
    for(let i = 0; i < 10; i++) {
        if(numbers.includes(i) === false) {
            result += i;
        }
    }
    return result;
}

 /*
  테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.3MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.03ms, 33.5MB)
 */

