// 테스트 1 〉	통과 (0.18ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.6MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.17ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)
// 테스트 12 〉	통과 (0.88ms, 33.7MB)
// 테스트 13 〉	통과 (0.05ms, 33.2MB)
// 테스트 14 〉	통과 (0.05ms, 33.3MB)

// 7점


function solution(a, b, n) {
    // 10개의 빈병을 가져가면 5개의 콜라를 준다.
    // 홀수개라면 -1 개만큼을 가져가서 그 수의 절반을 받는다.
    // a개를 가져갔을 때 b병을 돌려준다.
    // n : 가진 빈병의 개수
    
    // n을 a로 나눈 몫에 b를 곱하면 될까?
    // 재귀의 냄새가...
    let answer = 0;
    
    function getBottle(n){
        // 일단 n이 홀수인지 판별
        if (n < a){
            return;
        }
        
        if (n % a !== 0){
            // answer += n % a;
            let temp = n % a;
            answer += ((n - n % a) / a) * b;
            
            getBottle(((n - n % a) / a) * b + temp);
        }else{
            answer += (n / a) * b;
            getBottle((n / a) * b);
        }
    }
    
    getBottle(n);
    
    return answer;
}