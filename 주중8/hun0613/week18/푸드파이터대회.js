// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.10ms, 33.6MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.5MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	통과 (0.14ms, 33.5MB)
// 테스트 8 〉	통과 (0.09ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.09ms, 33.5MB)
// 테스트 11 〉	통과 (0.05ms, 33.3MB)
// 테스트 12 〉	통과 (0.05ms, 33.4MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.19ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.05ms, 33.4MB)
// 테스트 17 〉	통과 (0.05ms, 33.5MB)
// 테스트 18 〉	통과 (0.05ms, 33.4MB)
// 테스트 19 〉	통과 (0.05ms, 33.4MB)
// 테스트 20 〉	통과 (0.06ms, 33.4MB)


function solution(food) {
    // 칼로리 낮은 음식 먼저
    
    // 짝수면 1/2 소진
    // 홀수면 -1의 1/2 만큼 소진
    // repeat 써서 ㄱㄱ
    
    
    let answer = "";

    for (let i = 1; i < food.length; i++){
        if (food[i] !== 0 && food[i] % 2 === 0){
            answer += i.toString().repeat(food[i] / 2);
        }else if (food[i] - 1 !== 0){
            answer += i.toString().repeat((food[i] - 1) / 2);
        }
    }
    
    return answer + "0" + [...answer].reverse().join("");
    
}