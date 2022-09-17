// 풀이시간 : 17분 16초


function solution(phone_number) {
    // map을 사용하기위해 배열로 변환
    let numberArray = phone_number.split('');
    
    // map으로 만약 count가 phone_number의 길이에서 4를 뺀 수보다 작다면 *
    return (numberArray.map((el, index) => {
        return index < numberArray.length - 4 ? '*' : el;
    })).join('');
}