// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.25ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.58ms, 33.6MB)
// 테스트 8 〉	통과 (0.30ms, 33.4MB)
// 테스트 9 〉	통과 (4.40ms, 36.8MB)
// 테스트 10 〉	통과 (0.79ms, 33.5MB)
// 테스트 11 〉	통과 (3.15ms, 36.7MB)
// 테스트 12 〉	통과 (2.99ms, 36.7MB)
// 테스트 13 〉	통과 (0.25ms, 33.4MB)
// 테스트 14 〉	통과 (3.24ms, 36.7MB)

function solution(answers) {
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    
    
    let oneScore = 0;
    let twoScore = 0;
    let threeScore = 0;

    
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === one[i % 5]) oneScore++;
        
        if (answers[i] === two[i % 8]) twoScore++;
        
        if (answers[i] === three[i % 10]) threeScore++;
    }
    
    let res = [];
    let winner = Math.max(oneScore, twoScore, threeScore);
    
    [oneScore, twoScore, threeScore].forEach((el, idx) => {
        if (el === winner){
            res.push(idx + 1);
        }
    })
    
    return res;
}