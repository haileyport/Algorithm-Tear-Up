function solution(phone_number) {
    let answer = [];
    
    for(let i = 0; i< phone_number.length - 4; i++){
        answer.push(phone_number[i].replace(phone_number[i], '*'))
        console.log(phone_number[i].replace(phone_number[i], '*'))
    }
    for(let i = phone_number.length - 4; i < phone_number.length; i++){
        answer.push(phone_number[i])
    }
    console.log(answer.join(''))
    return answer.join('');
}
