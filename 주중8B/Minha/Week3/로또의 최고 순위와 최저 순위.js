/*
걸린시간
30분 100/100

정확성 테스트
테스트 1 〉	통과 (0.08ms, 33.6MB)
테스트 2 〉	통과 (0.09ms, 33.6MB)
테스트 3 〉	통과 (0.08ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.12ms, 33.5MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.09ms, 33.5MB)
테스트 8 〉	통과 (0.08ms, 33.5MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)
테스트 10 〉	통과 (0.08ms, 33.4MB)
테스트 11 〉	통과 (0.09ms, 33.4MB)
테스트 12 〉	통과 (0.08ms, 33.4MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.08ms, 33.4MB)
테스트 15 〉	통과 (0.09ms, 33.4MB)
*/


function solution(lottos, win_nums) {
    let answer = [];
    let zeronum = 0;
    // win_nums에서 lottos랑 같은 수 제거
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i]===0) zeronum ++; // 0 개수 카운트
        win_nums = win_nums.filter(el => el !== lottos[i]);
    }
            
    // 남은애들 중에 0과 win_nums를 비교
    let correct = 6-win_nums.length;
    let max = correct;
    if(win_nums.length >= zeronum) max += zeronum;
    
    // 최고 최저 순위를 배열에 담기
    answer = [rank(max), rank(correct)]
    
    return answer;
}

function rank(num){
    // 6->1 5->2 4->3 3->4 2->5 1->6 0->6
    return num < 2 ? 6 : 7-num;
}