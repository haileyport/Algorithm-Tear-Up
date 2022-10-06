/**
 * 통과 여부 : 
 * 시간 : 30
 * 점수 :
 */

/**
 * 
 * @param {*} s string
 * @returns 이진 변환 횟수, 변환 과정에서 제거된 모든 0의 개수
 */
 function solution(s) {
    // filter, indexOf 말고 replace 쓰면 될 듯
    // replace는 문자열의 경우 첫 번째만 치환되므로 replaceAll 사용
    
    let conversion = 0; // 변환 횟수
    let removeZero = 0; // 0 제거
    
    let originLength = s.length;
    let zeroCount = s.split('').
    filter((bit) => {
        bit.replace(0, '');
    })
    .join('');
    
    return removeZero;
    
    // return count;
}

    // filter, indexOf 말고 replace 쓰면 될 듯
    // replace는 문자열의 경우 첫 번째만 치환되므로 replaceAll 사용
    
    let conversion = 0; // 변환 횟수
    let removeZero = 0; // 0 제거

    let newArr = s.split('');
    
    // 0 제거 
    // "01110" ['0','1','1','1','0']
    for (let i = 0; i < s.length; i++) {
        if(newArr[i] === "0") {
            newArr.splice(i, 1);
            removeZero++;
            i--; // 삭제하니까 i-1 해야 해
        }
    }
    
   
    let number = newArr.length;
    let stepTwo = number.toString(2);
    
    
    return stepTwo;
    