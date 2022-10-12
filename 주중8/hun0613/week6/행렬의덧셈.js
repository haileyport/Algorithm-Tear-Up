// 풀이시간 : 18분 30초


function solution(arr1, arr2) {
    var answer = [[]];
    
    // 각 배열의 같은 인덱스의 원소끼리 합
    
    // for문으로 i는 0부터 arr1의 길이만큼 순회하면서
    for (let i = 0; i < arr1.length; i++){
        // answer의 i번째는 빈배열 -> 미리 자리 만들어두기
        answer[i] = [];
        // for문으로 j는 0부터 arr1[i]의 길이만큼 순회하면서
        for (let j = 0; j < arr1[i].length; j++){
            // answer[i]에 arr1[i][j] + arr2[i][j] push
            answer[i].push(arr1[i][j] + arr2[i][j])
        }     
    }

    return answer;
}


// ...? ㅋㅋ...

function solution(arr1, arr2) {
    return arr1.map((el, index) => el.map((el2, index2) => el2 + arr2[index][index2]));
}