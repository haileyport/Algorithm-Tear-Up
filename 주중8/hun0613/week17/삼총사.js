// 테스트 1 〉	통과 (0.27ms, 33.6MB)
// 테스트 2 〉	통과 (0.23ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.5MB)
// 테스트 5 〉	통과 (0.20ms, 33.5MB)
// 테스트 6 〉	통과 (0.22ms, 33.6MB)
// 테스트 7 〉	통과 (0.24ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.24ms, 33.5MB)
// 테스트 10 〉	통과 (0.27ms, 33.5MB)
// 테스트 11 〉	통과 (0.23ms, 33.2MB)
// 테스트 12 〉	통과 (0.18ms, 33.4MB)
// 테스트 13 〉	통과 (0.22ms, 33.4MB)


function solution(number) {
    // 3학생을 더했을 때 합이 0이면 삼총사
    // 삼총사가 되는 경우의 수를 구해라
    
    number.sort((a,b)=>a-b);
    
    let count = 0;
    
    while(number.length > 2){
        let max = number.pop();
        
        for (let i = 0; i < number.length; i++){
            for (let j = i + 1; j < number.length; j++){
                if (-(number[i] + number[j]) === max){
                    count++;
                }
            }
        }
    }
    
    return count;
}