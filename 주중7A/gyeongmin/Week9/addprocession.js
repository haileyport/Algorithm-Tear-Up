function solution(arr1, arr2) {
    var answer = [[]];
    
    const Row = arr1.length;
    const Column = arr1[0].length;

    for(let i = 0; i < Row; i++){
        answer[i] = [];
        for(let j = 0; j < Column; j ++){
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer;
}
