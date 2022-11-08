function solution(x) {
    let arrX = x.toString().split('');
    let sumX = 0
    for(let i = 0; i < arrX.length; i++){
        sumX = sumX + Number(arrX[i])
    }if(x % sumX === 0){
        return true
    } return false
}