function solution(numbers) {
    
    let sum = 0;
    let arr = [];
    
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = 1; j < numbers.length; j++){
            if(i !== j){
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    let set = new Set(arr)
    let answer = [...set].sort((x,y) => x-y)
    return answer;
}
