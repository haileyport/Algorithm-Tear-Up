// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.4MB)
// 테스트 2 〉	통과 (0.17ms, 33.5MB)
// 테스트 3 〉	통과 (0.38ms, 33.5MB)
// 테스트 4 〉	통과 (0.56ms, 33.7MB)
// 테스트 5 〉	통과 (0.60ms, 33.7MB)

// 효율성  테스트
// 테스트 1 〉	통과 (24.03ms, 55.5MB)
// 테스트 2 〉	통과 (41.35ms, 64.4MB)
// 테스트 3 〉	통과 (48.60ms, 68MB)
// 테스트 4 〉	통과 (61.34ms, 69.8MB)
// 테스트 5 〉	통과 (55.40ms, 69.6MB)


// 풀이시간 : 52분
// 점수 : 6점


function solution(participant, completion) {
    
    // let answer = '';   
    
    // for (let i = 0; i < participant.length; i++){
    //     if (completion.includes(participant[i])){
    //         completion.splice(completion.indexOf(participant[i]), 1);
    //     }else{
    //         answer = participant[i];
    //         break;
    //     }
    // }

    // return answer;
    
    
    const partMap = new Map();
    const compMap = new Map();
    
    let answer = '';
    
    completion.forEach(el => {
        compMap.set(el, compMap.get(el) ? compMap.get(el) + 1 : 1);
    })
    
    participant.forEach(el => {
        partMap.set(el, partMap.get(el) ? partMap.get(el) + 1 : 1);
    })
    
    participant.forEach(el => {
        if (partMap.get(el) !== compMap.get(el)){
            answer = el;
        }
    })
    
    return answer;
}