// 테스트 1 〉	통과 (0.18ms, 33MB)
// 테스트 2 〉	통과 (0.18ms, 33.1MB)
// 테스트 3 〉	통과 (0.19ms, 33.6MB)
// 테스트 4 〉	통과 (1.43ms, 36.6MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.22ms, 33.4MB)
// 테스트 8 〉	통과 (0.33ms, 33.5MB)
// 테스트 9 〉	통과 (0.46ms, 33.4MB)
// 테스트 10 〉	통과 (0.33ms, 33.5MB)
// 테스트 11 〉	통과 (0.54ms, 33.5MB)

// 풀이시간 : 30분 43초
// 점수 : 5점


function solution(board, moves) {
    // 스택
    // borad : 격자의 상태가 담긴 2차원 배열 (N x N)
    // moves : 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열
    
    // 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수 리턴
    
    let stack = [];
    let count = 0;
    // board를 0부터 순회
    // board[i]의 moves의 원소가 0이라면 -> 다음으로 넘어가고
    // 0이 아니라면 만약 스택의 마지막 원소와 board[i][j]이 같다면?
    // 스택에 팝, 그리고 카운트에 2 추가
    // 다르다면 ? 스택에 푸쉬
    
    // 최종 카운트 리턴
    moves.forEach(el => {
        for (let i = 0; i < board.length; i++){
            if (board[i][el-1] !== 0){
                if (stack[stack.length - 1] === board[i][el-1]){
                    stack.pop();
                    count += 2;
                }else{
                    stack.push(board[i][el-1])
                }
                board[i].splice(el-1,1,0)
                break;
            }
    }
    })
    
    
    return count;
    
}