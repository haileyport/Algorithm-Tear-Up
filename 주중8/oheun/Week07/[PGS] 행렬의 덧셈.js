/*
통과 여부 : 통과 
시간 : 15분
점수 : +1

아이디어 : 배열의 정확한 위치에 덧셈 값을 추가하기 위해 행, 열을 가진 빈 배열을 넣고 결과를 자리에 할당하자

*/

function solution(arr1, arr2) {
    let rowLength = arr1.length;
    let colLength = arr1[0].length;
    let answer = Array.from(Array(rowLength), () => new Array(colLength));
    // return `rowLength ${rowLength}, colLength ${colLength}`;
    
    for (let i = 0; i < rowLength; i++){ // 행 순회
        for (let j = 0; j < colLength; j++) { // 열 순회
            // console.log(arr1[i][j], arr2[i][j]);
            answer[i][j] = arr1[i][j]+ arr2[i][j]; 
        }
    }
    // console.log(answer);
    return answer;
}