// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.10ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)


function solution(array, commands) {
    // array : 최초 배열
    // commands : [to, from, 자른뒤 인덱스]
    
    let answer = [];
    
    let originArray = array;
    
    commands.forEach(el => {
        
        let newArr = originArray.slice(el[0] - 1, el[1]).sort((a,b)=>a-b);
        answer.push(newArr[el[2] - 1]);
    })
    
    return answer;
}