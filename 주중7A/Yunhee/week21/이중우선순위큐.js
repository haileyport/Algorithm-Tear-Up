function solution(operations) {
    const queue = [];
    
    // I 명령어일 때 값을 넣고 오름차순으로 정렬
    // D 1 명령어에서 최댓값(오름차순이므로 배열의 마지막 요소) 제거
    // D -1 명령어에서 최솟값(오름차순이므로 배열의 첫번째 요소) 제거
    for(let op of operations){
        switch(op) {
            case "D 1":
                queue.pop();
                break;
            case "D -1":
                queue.shift();
                break;
            default:
                let number = +op.split(" ")[1];
                
                queue.push(number);
                queue.sort((a, b) => a - b);
                break;
        }
    }
    
    return queue.length <= 0 ? [0,0] : [queue[queue.length-1], queue[0]];
}