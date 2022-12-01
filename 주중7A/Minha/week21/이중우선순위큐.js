function solution(operations) {
    let answer = [];
    let pq = []; // priority queue
    operations.forEach(el => {
        const [operator, operand] = el.split(' ');
        if(operator === "I") pq.push(Number(operand));
        else if(operator === "D")
            operand === "-1" ? pq.shift() : pq.pop();
        // -1이면 앞에서 제거, 1이면 뒤에서 제거
        
        pq.sort((a,b)=>a-b); // 오름차순 정렬
    });
    return pq.length ? [pq[pq.length-1], pq[0]] : [0,0];
}