// 테스트 1 〉	통과 (0.20ms, 33.5MB)
// 테스트 2 〉	통과 (0.20ms, 33.5MB)
// 테스트 3 〉	통과 (0.17ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.6MB)
// 테스트 5 〉	통과 (0.19ms, 33.5MB)
// 테스트 6 〉	통과 (0.13ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.5MB)

// 풀이시간 : 3분
// 점수 : 1점



//약수의 개수가 홀수라는 것은 제곱근이 딱 떨어진다는 뜻
// 제곱근을 했을경우 소수점이 아닌 딱 떨어진다면 약수의 갯수는 홀수이다.

function isEven(num){
    return Math.sqrt(num) % 1 === 0 ? false : true;
} 


function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++){
        isEven(i) ? answer += i : answer -= i;
    }
    
    return answer;
}