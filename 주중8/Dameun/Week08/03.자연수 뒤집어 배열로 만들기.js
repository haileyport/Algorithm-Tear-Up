function solution(n) {
    var answer = [];
    let arrN = String(n).split('').map(Number);
    for(let n of arrN){
        answer.unshift(n)
    }
    return answer;
}

//7점 
//10분 내

