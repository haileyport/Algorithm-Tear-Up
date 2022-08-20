function solution(board, moves) {
  let answer = [];
  // 숫자에서 인덱스로 치환
  let modimoves = moves.map(el => el - 1);
  // 각 배열을 순환하면서 가장 먼저 발견된 값을 answer로 연결
  for(let i = 0; i < modimoves.length; i++){
    let location = modimoves[i];
    for(let j = 0; j < board.length; j++){
      if(board[j][location] !== 0){
        // console.log(`moves 위치는:${location}, 탐색하는 배열: ${board[j]}, 내가 찾아낸 것은: ${board[j][location]}`)
        answer.push(board[j][location]);
        board[j][location] = 0;
        break;
      }
    }
  }
  // console.log(answer);
  // 중복되는 것 제거 
  let count = 0;
  for(let i = 0; i < answer.length -1; i++){
    // console.log(`현재 보고 있는 index는 ${i}`)
    if(answer[i] === answer[i+1]){
      answer.splice(i, 2);
      // console.log(answer);
      count = count + 2;
      i = -1; // 초기화한 후에 바로 ++이 있기에 -1로 넣어야 0번째 index를 탐색
    }
  }
  return count;
}
let bordy = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let movy = [1,5,3,5,1,2,1,4];


let output = solution(bordy, movy);
console.log(output);