// 풀이시간 : 29분 18초
// 점수 : 8점 😎


function solution(arr) {
    var answer = [];
    
    // 빈배열 또는 요소가 하나(최솟값 삭제하고나면 아무것도 없을테니까) ? -1 
    if(arr.length <= 1){
        answer.push(-1);
    }else{
        // arr 오름차순으로 정렬!한 거에서 마지막 요소 빼기
        let min = arr.slice().sort((a, b) => a - b)[0]
        let minIndex = arr.indexOf(min);
    
        arr.splice(minIndex, 1);
        answer = arr;
    }
    
    return answer;
}