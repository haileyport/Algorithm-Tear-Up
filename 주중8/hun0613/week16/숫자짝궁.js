// 효율성검사 실패

function solution(X, Y) {
    // X와 Y간 중복되는 숫자의 쌍들로 만든 가장 큰수
    
    let answer = [];
    
    let sortedX = [...X].map(el => +el).sort((a,b)=>a-b);
    let sortedY = [...Y].map(el => +el).sort((a,b)=>a-b);
    
    let big = "";
    let small = "";
    
    if (sortedX.length >= sortedY.length){
        big = sortedX;
        small = sortedY;
    }else{
        big = sortedY;
        small = sortedX;
    }
    
    
    
    for(let i = 0; i < small.length; i++){
        let find = big.indexOf(small[i]);
        if (find !== -1){
            answer.unshift(small[i]);
            big.splice(find, 1);
        }
    }
    
   
    
    return answer.length === 0 ? "-1" : Number(answer.join('')).toString();
    // return sortedX;
    
}