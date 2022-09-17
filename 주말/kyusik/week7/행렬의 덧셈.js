function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        let first = [];
        for(let j = 0; j < arr1[i].length; j++){
            first.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(first);
    }
    return answer;
}