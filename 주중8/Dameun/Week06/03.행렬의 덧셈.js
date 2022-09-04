function solution(arr1, arr2) {
    var answer = [];
    let length = arr1.length;
    for (let n=0; n<length; n++){
        let answer2 = [];
        let arrLength = arr1[n].length
        for(let m=0; m<arrLength; m++){
            answer2.push(arr1[n][m] + arr2[n][m])
        }
        answer.push(answer2)
    }
    return answer;
}


//https://school.programmers.co.kr/learn/courses/30/lessons/12950
//20분 가량

