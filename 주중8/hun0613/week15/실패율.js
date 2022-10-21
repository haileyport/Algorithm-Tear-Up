// 8점

// 테스트 1 〉	통과 (0.33ms, 33.5MB)
// 테스트 2 〉	통과 (0.76ms, 33.7MB)
// 테스트 3 〉	통과 (136.74ms, 43.1MB)
// 테스트 4 〉	통과 (868.07ms, 75.6MB)
// 테스트 5 〉	통과 (3323.28ms, 70.7MB)
// 테스트 6 〉	통과 (3.68ms, 36.1MB)
// 테스트 7 〉	통과 (27.29ms, 38.7MB)
// 테스트 8 〉	통과 (757.86ms, 75.3MB)
// 테스트 9 〉	통과 (3129.54ms, 71.6MB)
// 테스트 10 〉	통과 (320.00ms, 66.9MB)
// 테스트 11 〉	통과 (783.17ms, 71.5MB)
// 테스트 12 〉	통과 (392.92ms, 65MB)
// 테스트 13 〉	통과 (1303.25ms, 70.1MB)
// 테스트 14 〉	통과 (0.43ms, 33.5MB)
// 테스트 15 〉	통과 (49.53ms, 49.6MB)
// 테스트 16 〉	통과 (10.46ms, 38.5MB)
// 테스트 17 〉	통과 (51.92ms, 51MB)
// 테스트 18 〉	통과 (18.67ms, 38.5MB)
// 테스트 19 〉	통과 (3.06ms, 35.9MB)
// 테스트 20 〉	통과 (18.04ms, 40.4MB)
// 테스트 21 〉	통과 (30.56ms, 43.9MB)
// 테스트 22 〉	통과 (6125.65ms, 73.7MB)
// 테스트 23 〉	통과 (59.86ms, 50.6MB)
// 테스트 24 〉	통과 (182.28ms, 65.4MB)
// 테스트 25 〉	통과 (0.17ms, 33.4MB)
// 테스트 26 〉	통과 (0.17ms, 33.5MB)
// 테스트 27 〉	통과 (0.19ms, 33.4MB)

function solution(N, stages) {
    // N : 전체 스테이지의 수
    // stages : 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열

    // 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수
    
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 리턴
    
    // let clearCount = 0;
    // let tryCount = 0;
    let stage = {};
    let answer = [];
    
    
    for (let i = 1; i <= N; i++){
        let approachDB = stages.filter(el => el >= i);
        let approachCount = approachDB.length;
        
        let tryDB = approachDB.filter(el => el === i);
        let tryCount = tryDB.length;
        
        stage[i] = approachCount === 0 ? 0 : tryCount / approachCount;
    }
    
    // return stage;
    
    let max = -1;
    let maxIdx = 0;
    while (answer.length !== N){
       for (let j in stage){
            if (stage[j] > max){
                max = stage[j];
                maxIdx = j;
            }else if (stage[j] === max){
                max = maxIdx > Number(j) ? stage[j] : max;
                maxIdx = maxIdx > Number(j) ? Number(j) : maxIdx;
            }
           
        }
        delete stage[maxIdx];
        answer.push(maxIdx); 
        max = -1;
        maxIdx = 0;
        
    }
        
    
    return answer.map(el => +el);
    
    
}