
// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.6MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)

function solution(n) {
    // var answer = 0;
    // return answer;
    
    // 3진법으로 바꾸고
    // 앞뒤를 바꾸고
    // 다시 10진법... 하...
    
    let three = n.toString(3);
    let switchThree = '';
    
    for (let i = three.length - 1; i >= 0; i--){
        switchThree = switchThree + three[i];
    }
    
    return parseInt(switchThree,3);
    
    
}