// 시간 초과
function solution(X, Y) {
    const arrX = [...X];
    const arrY = [...Y];
    let pair = [];
    
    arrX.forEach(x => {
        let idx = arrY.indexOf(x);
        
        if(idx > -1) {
            pair.push(arrY[idx]);
            arrY[idx] = "*";
        }
    })
    
    let result = pair.sort((a,b) => b - a).join("");
    
    if(result.length === 0) return "-1";
    if(+result === 0) return "0";
    
    return result;
}

// 다른 사람 풀이
function solution(X, Y) {
    const commonNumbers = [...new Set(X.split(''))].filter((number) => {
        return Y.includes(number);
    }).sort((a, b) => b - a)

    if (!commonNumbers.length) return '-1';

    if (!Number(commonNumbers[0])) return '0';

    return commonNumbers.map((number) => {
        const Xcount = X.split('').reduce((count, Xnumber) => {
            if (Xnumber === number) return count += 1;

            return count;
        }, 0)

        const Ycount = Y.split('').reduce((count, Ynumber) => {
            if (Ynumber === number) return count += 1;

            return count;
        }, 0)        

        return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
    }).join('')
}