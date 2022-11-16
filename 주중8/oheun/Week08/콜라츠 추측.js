/*
통과 여부 : 통과
시간 : 1시간 25분
점수 : +5

문제 : 작업을 반복하면 모든 수를 1로 만들 수 있다.
input : num => 정수
output : 반복횟수, 500번 이상이면 -1, num이 1이면 0

테스트 1 〉	통과 (0.06ms, 30MB)
테스트 2 〉	통과 (0.17ms, 30MB)
테스트 3 〉	통과 (0.13ms, 30MB)
테스트 4 〉	통과 (0.06ms, 30MB)
테스트 5 〉	통과 (0.14ms, 30.1MB)
테스트 6 〉	통과 (0.08ms, 30.1MB)
테스트 7 〉	통과 (0.11ms, 30.1MB)
테스트 8 〉	통과 (0.11ms, 30MB)
테스트 9 〉	통과 (0.06ms, 30.1MB)
테스트 10 〉통과 (0.12ms, 30.1MB)
테스트 11 〉통과 (0.16ms, 30.1MB)
테스트 12 〉통과 (0.09ms, 30.1MB)
테스트 13 〉통과 (0.05ms, 30MB)
테스트 14 〉통과 (0.07ms, 30MB)
테스트 15 〉통과 (0.06ms, 30MB)
테스트 16 〉통과 (0.14ms, 30MB)

<틀렸던 이유>
1. console.log로 보는 출력이 이상하게 되는 이유
    => 지금 함수 처음에 들어와서 result에서 납치 당하고 있음. 1까지 나눠질 때까지 돌고 return 되는 중
2. 재귀함수를 너무 무식하게 짰었다. 내가 뭘 짜는지 모르고 짰었음.

<해결 방법>
1. 재귀 함수의 구조를 다시 찾아봤다.
2. 호출 횟수를 이용하기 위해 고민하던 중 꼬리 물기 최적화(Tail recursion)을 보게 되었고,
 코플릿에서 여러 번 언급된 tail과 유사하다 싶어 살펴보았다. function을 2개 쓰는 예제를 참고하여,
 호출 횟수인 count를 이용하였다.
https://2ssue.github.io/common_questions_for_Web_Developer/docs/Javascript/4_prevent_recursion_stack-overflow.html#tail-recursion
괜히 어렵게 생각해서 어려웠었는데 이번 문제는 쉽게 포기 안하고 잘 붙잡아서 뿌듯!
*/

// function solution(num) {
//     console.log('여기는 처음 if-else문'); 
//     console.log(num); // num 제대로 들어오고 있음.
//     if(num === 1){
//         return 0;
//     }else if(num === -1){
//         return -1;
//     }

//     // 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
//     // 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
//     // 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
//     // 밑에서 num이 이상하게 돌고 있음. 다시 처음에서 시작되고 있음.
//     console.log('여기는 answer, result 선언'); 
//     let answer = num%2 === 0? num/2 : num*3+1;
//     let result = 1+ solution(answer);
//     // console.log(`num은 ${num}, answer은 ${answer}, result는 ${result}`); 
//     // 어디서 500이 초기화되는거지?        
//     console.log('여기서 return '); 
//     return result;
// }


function solution(num) {
    function cal(num, count) {
        // 재귀함수로 풀어보자
        // tail recursion을 사용해보자
        console.log(count, num);
        if(num === 1) { // 더 이상 쪼갤 수 없는 상태 
            return count > 500? -1 : count;
        }
    
        // 재귀 호출 : 1이 아니면 자기 자신 호출
        return  num%2 === 0? cal(num/2, count+1) : cal(num*3+1, count+1);
    
    }
    return cal(num, 0);
}