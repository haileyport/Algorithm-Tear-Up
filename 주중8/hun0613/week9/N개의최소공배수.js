function solution(arr) {
    // let row = [...arr];
    // 1로 나누는 것은 의미없다.
    // 2부터 시작해서 arr에서 가장 작은 수까지 나눴을 때
    // 모두 다 나눠지면 (boolean값으로 나눠지는지 아닌지 판별하자) column 배열에 나눈 수 push
    // arr의 각 원소들은 나눈 후의 값으로 재할당
    // 만약 하나라도 안나눠지면 i++
    
    // 만약 column에 아무런 값이 없다면 arr안에 있는거 다 곱해버리기
    // 그게 아니라면 column에 있는거랑 arr에 있는거 다 곱하기
    
    // for (let i = 2; i <= Math.min(...row);){
    //     let isDivide = true;

    //     for (let j = 0; j < row.length; j++){
    //         if(row[j] % i !== 0){
    //             i++;
    //             isDivide = false;
    //             break;
    //         }
    //     }
        
    //     if(isDivide) {
    //         column.push(i);
    //         row = row.map(el => Math.floor(el / i))
    //     }
        
    // }
    
    // if(column.length){
    //     return column.reduce((a, b) => a * b) * row.reduce((a, b) => a * b);
    // }else{
    //     return row.reduce((a, b) => a * b)
    // }

//     // 유클리드 호제법
    
    let row = [...arr];
    
    
    const getGCD = (num1, num2) => {
        return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
    }
    
    const getLCM = (num1, num2) => num1 * num2 / getGCD(num1, num2);
    
    
    while (row.length > 1){
        
        let a = row.shift();
        let b = row.shift();
        row.unshift(getLCM(a, b));
        
    }
   
    return Number(row.join(''));
    
    
}