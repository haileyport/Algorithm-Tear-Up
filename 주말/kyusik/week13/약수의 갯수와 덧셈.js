function solution(left, right) {
    //2부터 구하고자 하는 수의 제곱근까지 나눠서 나누어떨어지면 그 수와 몫은 구하고자 하는 수의 약수
    //1과 자기 자신을 포함하고, 위에서 구한 약수들을 배열에 넣고 중복되는 수를 제거한 길이를 구하면 약수의 갯수가 나옴.
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
