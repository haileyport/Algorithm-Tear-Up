function gcb(a,b){
    if(b===0){
        return a
    }else{
        return gcb(b, a%b)
    }
}

function solution(arr) {
    //유클리드호제법을 이용한다
    return arr.reduce((acc, cur) => acc * cur / gcb(acc , cur) )
}