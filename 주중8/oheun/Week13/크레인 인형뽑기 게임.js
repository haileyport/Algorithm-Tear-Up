/**
 * NxN 
 * 인형은 1X1
 * 맨 위부터 가져가면 STACK.POP?
 * 같은 거 2개면 바구니에서 사라짐
 */
 function solution(board, moves) {
    /*
    board : 2차원 배열
    moves : 크레인 위치
    return : 터트려져 사라진 인형의 개수 
    */
    
    let count = 0;
    let stack = [];
    
    moves.forEach((move, idx) => {
        // 움직임 스택으로 가서 
        let target = board[move-1];
        console.log(`target은 ${target}`)

        // 만약 이번에 집은 게 전꺼랑 같으면
        // 왜 안 사라지지..?
        if(target.slice(-1)===stack[idx-1]){
                stack[idx-1].pop();
                count++;
            console.log(stack);
            }
        
        stack.push(target.slice(-1).join(''));
        board[move-1].pop();
        console.log(stack);
    })
    
    return stack;
    
}