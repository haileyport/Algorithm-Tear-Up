function solution(x) {
    let sum = 0;
    let stringX = x.toString()
    for(let i = 0; i < stringX.length; i++){
        sum += Number(stringX[i])
    }
    console.log(sum)
    let answer = (x%sum === 0) ? true : false;
    return answer;
}
