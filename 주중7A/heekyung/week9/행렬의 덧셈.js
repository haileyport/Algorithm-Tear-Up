function solution(arr1, arr2) {
    var answer = [];
    let sum = []
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr1[i].length; j++) {

            sum.push(arr1[i][j] + arr2[i][j])
        }


        answer.push(sum)
        sum = []
    }
    return answer;
}
