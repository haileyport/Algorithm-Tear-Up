/*
통과 여부 : 통과
점수 : +11
시간 : 10분

* 아이디어
    - 저번에 소개해주신 에라토스테네스의 체를 이용한 다음
    - 소수의 개수만 return

* 정확성 테스트
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.27ms, 33.5MB)
테스트 3 〉	통과 (0.25ms, 33.5MB)
테스트 4 〉	통과 (0.21ms, 33.5MB)
테스트 5 〉	통과 (0.29ms, 33.4MB)
테스트 6 〉	통과 (1.10ms, 33.5MB)
테스트 7 〉	통과 (0.32ms, 33.6MB)
테스트 8 〉	통과 (0.63ms, 33.6MB)
테스트 9 〉	통과 (1.29ms, 33.7MB)
테스트 10 〉통과 (11.84ms, 39.3MB)
테스트 11 〉통과 (29.58ms, 44.9MB)
테스트 12 〉통과 (15.79ms, 39.8MB)

* 효율성 테스트
테스트 1 〉	통과 (27.30ms, 45.4MB)
테스트 2 〉	통과 (29.10ms, 45.2MB)
테스트 3 〉	통과 (28.22ms, 45.4MB)
테스트 4 〉	통과 (29.19ms, 45.2MB)
*/

function solution(n) {
    let isPrime = new Array(n+1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    
    for (let i=2; i*i<=n; i++){
        if(isPrime[i]){
            for(let j=i*i; j<=n; j+=i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime.filter(el => el === true).length;
}