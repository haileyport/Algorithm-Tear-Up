function solution(a, b) {
    //     let maxNum = a > b? a : b
    //     let minNum = maxNum === a ? b : a

    //         if(minNum === maxNum){
    //         return minNum
    //     } else {
    //             return maxNum + solution(minNum ,maxNum-1)
    //     }
    // 재귀 사용시 50 성공 (나머지 런타임 에러)

    var answer = 0;
    var minNum = Math.min(a, b);
    var maxNum = Math.max(a, b);
    for (var i = minNum; i <= maxNum; i++) {
        answer += i;
    }
    return answer;
    //기본이 좋네
}


