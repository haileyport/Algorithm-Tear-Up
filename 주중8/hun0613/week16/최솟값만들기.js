
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.20ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (0.19ms, 33.4MB)
// 테스트 6 〉	통과 (0.20ms, 33.5MB)
// 테스트 7 〉	통과 (0.20ms, 33.6MB)
// 테스트 8 〉	통과 (0.20ms, 33.6MB)
// 테스트 9 〉	통과 (0.30ms, 33.4MB)
// 테스트 10 〉	통과 (0.33ms, 33.5MB)
// 테스트 11 〉	통과 (0.28ms, 33.6MB)
// 테스트 12 〉	통과 (0.25ms, 33.4MB)
// 테스트 13 〉	통과 (0.17ms, 33.6MB)
// 테스트 14 〉	통과 (0.17ms, 33.4MB)
// 테스트 15 〉	통과 (0.17ms, 33.5MB)
// 테스트 16 〉	통과 (0.17ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.81ms, 33.1MB)
// 테스트 2 〉	통과 (0.77ms, 33.4MB)
// 테스트 3 〉	통과 (0.84ms, 33.4MB)
// 테스트 4 〉	통과 (0.89ms, 33MB)

//3점

function solution(A,B){

    // A에서 최소 B에서는 최대
    
    let sortedA = A.sort((a,b)=>a-b);
    let sortedB = B.sort((a,b)=>a-b);

    let answer = 0;
    while(sortedA.length > 0){
        if (sortedA[0] < sortedB[0]){
            answer += sortedA.shift() * sortedB.pop(); 
        }else {
            answer += sortedA.pop() * sortedB.shift();
        }
         
    }
    
    return answer;
}