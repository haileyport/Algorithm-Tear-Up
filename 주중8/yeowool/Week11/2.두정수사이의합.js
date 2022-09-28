// [PGS] 두 정수 사이의 합 / leve1
// 난이도 :  level 1
// 풀이시간 : 10분
// 점수 : . 

/*
문제
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
입출력 예
a	b	return
3	5	12
3	3	3
5	3	12
*/

/*
< 의사코드 >
1. result를 선언
2. for문으로 순회하는데 시작하는 i를 a,b중 작은 숫자로 할당하고 
    a,b중 큰 숫자까지 순회하도록 했다.
3. i를 result에 더해준다
4. 삼항연산자로 a와 b가 같을 경우에는 a를 return하고 아닐 경우에는 result를 return
*/
   
function solution(a, b) {
    let result= 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
        result += i
    }
    
    return a===b ? a : result;
}


/*
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.12ms, 33.5MB)
테스트 4 〉	통과 (24.97ms, 36.8MB)
테스트 5 〉	통과 (16.71ms, 36.9MB)
테스트 6 〉	통과 (14.18ms, 36.8MB)
테스트 7 〉	통과 (7.90ms, 36.8MB)
테스트 8 〉	통과 (11.57ms, 36.8MB)
테스트 9 〉	통과 (9.09ms, 36.8MB)
테스트 10 〉	통과 (3.40ms, 36.9MB)
테스트 11 〉	통과 (0.34ms, 33.5MB)
테스트 12 〉	통과 (1.64ms, 36.5MB)
테스트 13 〉	통과 (0.45ms, 33.5MB)
테스트 14 〉	통과 (0.10ms, 33.5MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
테스트 16 〉	통과 (0.32ms, 33.5MB)
*/
// function solution(a, b) {
//     let result;
//     return a===b ? a : for(let i = Math.min(a, b); i <= Math.max(a, b); i++){return result+=i}
//     }

// 삼항연산자의 false부분에서 for문을 쓰려고 했는데 실패했다.
