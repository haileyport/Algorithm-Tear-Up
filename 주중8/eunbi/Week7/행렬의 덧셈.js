// [프로그래머스] 행렬의 덧셈 / 6분 36초 
function solution(arr1, arr2) {
    let answer = Array.from(arr1);

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[i].length; j++){
            answer[i][j] = arr1[i][j]+arr2[i][j];
        }
    }

    return answer;
}