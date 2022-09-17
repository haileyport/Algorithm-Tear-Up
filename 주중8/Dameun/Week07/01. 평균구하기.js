function solution(arr) {
    var answer = 0;
    let addResult = arr.reduce((arr,cur) => arr+cur,0);
    answer = addResult/arr.length
    return answer;
}

//5분 내 