// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.22ms, 33.3MB)
// 테스트 3 〉	통과 (0.24ms, 33.6MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.07ms, 33.6MB)
// 테스트 6 〉	통과 (0.11ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.07ms, 33.5MB)

// 풀이시간 : 6분 43초
// 점수 : 1점

function solution(numbers) {
    // numbers : 0~9까지 숫자 중 일부가 들어있는 정수 배열
    
    // 0~9까지 중 number에 없는 수만 더한 값
    
    // 모든 숫자가 있는 정수 배열 만들고
    // includes써서 있으면 answer배열에 넣고 없으면 그냥 넘어가자
    // 마지막에 answer에 있는거 싹 다 더하면 답
    let answer = 0;
    
    const arr = Array.from({length:9}, (v,i)=>i+1); 
    
    arr.forEach(el => {
        if (numbers.includes(el) === false){
            answer += el;
        }
    })
    
    return answer;
}