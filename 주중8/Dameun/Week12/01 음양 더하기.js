function solution(absolutes, signs) {
    let result = [];
    while(absolutes.length > 0){
        if(signs[0] === true){
            result.push(absolutes[0])
        }else{
            result.push(absolutes[0] * -1)
        }
        absolutes.shift()
        signs.shift()
    }
    return result.reduce((a,b) => a + b,0)
}

//5분 
//1점
