// 풀이시간 : 3분 14초
// 점수 : 1점 🤔


function solution(arr) {
    var answer = 0;
    
    // reduce로 arr의 원소를 모두 더해줌
    // 그 합을 arr의 갯수만큼 나누기
    
    let sum = arr.reduce((cur, acc) => {
        return cur + acc
    })
    
    answer = sum / arr.length;
    
    return answer;
}