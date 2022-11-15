// 실패

function solution(brown, yellow) {
    let entireCarpet = brown + yellow;
    
    // 가로길이는 세로길이와 같거나 크다.
    

    let width;
    let height;
    
    for (let i = 1; i <= Math.sqrt(entireCarpet); i++){
        if (entireCarpet % i === 0){
            width = entireCarpet / i;
            height = i;
            
        }
    }
    
    return [width, height]
    
}