// 3점
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.4MB)
// 테스트 7 〉	통과 (0.89ms, 33.5MB)
// 테스트 8 〉	통과 (0.50ms, 33.4MB)
// 테스트 9 〉	통과 (0.36ms, 33.6MB)

function solution(numbers) {

    // numbers를 일단 오름차순으로 정렬
    // numbers의 0번째 요소를 pivot으로 잡고 1번부터 마지막까지 더한 값을 result에 푸쉬.
    // 푸쉬할대 result에 해당 값이 있는 지 판별 -> 없어야 push가 이루어진다.
    
    // result를 오름차순으로 정렬
    
    let result = [];
    
    numbers.sort((a,b)=>a-b);
    
    while (numbers.length > 1){
        let pivot = numbers[0];
        
        for (let i = 1; i < numbers.length; i++){
            let sum = pivot + numbers[i];
            
            if (!result.includes(sum)){
                result.push(sum);
            }
        }
        numbers.shift();
    }
    
    return result.sort((a,b)=>a-b);
}

