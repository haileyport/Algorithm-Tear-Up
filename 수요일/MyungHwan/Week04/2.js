function solution(numbers) {
    let result = 0;
    
    for(let j = 0; j < 10; j++){
        if(!numbers.includes(j)){
            result = result + j
        }
    }return result
}