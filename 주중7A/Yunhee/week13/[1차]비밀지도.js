function convertArr(n, arr){
    return arr.map(el => {
        let convertEl = el.toString(2);
        return convertEl.length < n ? `${"0".repeat(n-convertEl.length)}${convertEl}` : convertEl;
    })
}

function solution(n, arr1, arr2) {
    // 11:23 => 11:49
    // 지도1 또는 지도2 중 하나라도 벽(#)인 부분은 전체 지도에서도 벽이다.
    
    // 배열의 각 요소를 이진수로 변경
    arr1 = convertArr(n, arr1);
    arr2 = convertArr(n, arr2);
    
    // 배열의 각 요소들을 합치기
    const newArr = [];
    
    for(let i = 0; i < arr1.length; i++){
        const newArr1 = arr1[i].split("");
        const newArr2 = arr2[i].split("");
        
        newArr[i] = newArr1.map((e, idx) => Number(e) + Number(newArr2[idx])).join("");
    }
    
    // 숫자를 #으로 변환
    const result = [];
    
    for(let i = 0; i < newArr.length; i++){
        result[i] = newArr[i].split("").map(e => +e > 0 ? "#" : " ").join("");
    }
    
    return result;
}