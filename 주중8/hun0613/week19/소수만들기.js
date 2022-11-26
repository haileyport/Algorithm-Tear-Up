// 테스트 1 〉	통과 (1.13ms, 35.6MB)
// 테스트 2 〉	통과 (1.26ms, 35.6MB)
// 테스트 3 〉	통과 (0.31ms, 33.6MB)
// 테스트 4 〉	통과 (0.42ms, 33.6MB)
// 테스트 5 〉	통과 (2.23ms, 35MB)
// 테스트 6 〉	통과 (3.35ms, 35.6MB)
// 테스트 7 〉	통과 (0.31ms, 32.7MB)
// 테스트 8 〉	통과 (6.32ms, 35.8MB)
// 테스트 9 〉	통과 (0.45ms, 33.5MB)
// 테스트 10 〉	통과 (4.68ms, 35.9MB)
// 테스트 11 〉	통과 (0.23ms, 33.6MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (0.25ms, 33.4MB)
// 테스트 14 〉	통과 (0.21ms, 33.5MB)
// 테스트 15 〉	통과 (0.23ms, 33.4MB)
// 테스트 16 〉	통과 (4.50ms, 35.9MB)
// 테스트 17 〉	통과 (4.38ms, 35.5MB)
// 테스트 18 〉	통과 (0.21ms, 33.5MB)
// 테스트 19 〉	통과 (0.08ms, 33.5MB)
// 테스트 20 〉	통과 (6.26ms, 35.9MB)
// 테스트 21 〉	통과 (4.35ms, 35.9MB)
// 테스트 22 〉	통과 (0.47ms, 33.6MB)
// 테스트 23 〉	통과 (0.07ms, 33.4MB)
// 테스트 24 〉	통과 (6.91ms, 36.1MB)
// 테스트 25 〉	통과 (5.11ms, 35.8MB)
// 테스트 26 〉	통과 (0.06ms, 33.5MB)

function solution(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length - 2; i++){
        for (let j= i+1; j < nums.length - 1; j++){
            for (let k = j+1; k < nums.length; k++){
                if (isDecimal(nums[i] + nums[j] + nums[k])){
                    count++;
                }
            }
        }
    }
    
    return count;
}
    
function isDecimal(num){
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
            break;
        }
    }
    return true;
}