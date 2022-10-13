function solution(arr){
    // 연속적으로 나타나는 숫자는 하나만 남기고 제거
    const result = [];
    const temp = [];
    
    while(arr.length > 0){
        let num = arr.pop();
        
        // result의 첫 요소(가장 마지막에 추가)와 arr에서 빼낸 요소가 같지 않으면 추가
        if(result[result.length-1] !== num){
            result.push(num);
        }else{
            temp.push(temp);
        }
    }
    
    return result.reverse();
}