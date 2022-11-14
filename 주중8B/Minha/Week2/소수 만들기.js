/*
걸린시간
10분 100/100

정확성 테스트
테스트 1 〉	통과 (1.01ms, 33.5MB)
테스트 2 〉	통과 (1.21ms, 33.7MB)
테스트 3 〉	통과 (0.27ms, 33.6MB)
테스트 4 〉	통과 (0.27ms, 33.4MB)
테스트 5 〉	통과 (1.83ms, 35.6MB)
테스트 6 〉	통과 (2.62ms, 35.8MB)
테스트 7 〉	통과 (0.21ms, 33.5MB)
테스트 8 〉	통과 (5.17ms, 35.7MB)
테스트 9 〉	통과 (0.40ms, 33.5MB)
테스트 10 〉	통과 (6.79ms, 36.1MB)
테스트 11 〉	통과 (0.24ms, 33.4MB)
테스트 12 〉	통과 (0.23ms, 33.4MB)
테스트 13 〉	통과 (0.24ms, 33.5MB)
테스트 14 〉	통과 (0.21ms, 33.5MB)
테스트 15 〉	통과 (0.16ms, 33.5MB)
테스트 16 〉	통과 (5.90ms, 36MB)
테스트 17 〉	통과 (4.04ms, 35.5MB)
테스트 18 〉	통과 (0.18ms, 33.5MB)
테스트 19 〉	통과 (0.07ms, 33.4MB)
테스트 20 〉	통과 (6.29ms, 35.9MB)
테스트 21 〉	통과 (4.24ms, 35.8MB)
테스트 22 〉	통과 (0.39ms, 33.5MB)
테스트 23 〉	통과 (0.09ms, 33.5MB)
테스트 24 〉	통과 (6.03ms, 36MB)
테스트 25 〉	통과 (5.57ms, 36MB)
테스트 26 〉	통과 (0.06ms, 33.4MB)
*/


function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){ // 첫번째
        for(let j = i+1; j < nums.length; j++){ // 두번째
            for(let k = j+1; k < nums.length; k++){ // 세번째 숫자
                if(isPrime(nums[i] + nums[j] + nums[k])) answer += 1;   
            }
        }
    }
    return answer;
}
    
function isPrime(num){
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}