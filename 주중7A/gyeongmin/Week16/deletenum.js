function solution(arr) {
    var answer = [];
    let index = arr.indexOf(Math.min(...arr))
    
    console.log(index)
    for(let i = 0 ; i < arr.length; i++){
        if(i !== index) answer.push(arr[i])
    }    
    return answer.length === 0 ? [-1] : answer
}
