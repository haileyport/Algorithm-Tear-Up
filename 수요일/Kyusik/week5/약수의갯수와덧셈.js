function solution(left, right) {
    let divisorArr = [];
    let resultArr = [];
    for(let j = left; j <= right; j++){
        for(let i = 1; i <= Math.sqrt(j); i++){
            if(j % i === 0) {
                divisorArr.push(i);
                divisorArr.push(j / i);
            }
        }
        let divisorSet = new Set(divisorArr)
        divisorArr = [];
        if(divisorSet.size % 2 === 0){
            resultArr.push(j)
        }else{
            resultArr.push(-j)
        }
        divisorSet.clear()
    }
    console.log(resultArr)
    return resultArr.reduce((acc, cur) => acc + cur, 0);
}
