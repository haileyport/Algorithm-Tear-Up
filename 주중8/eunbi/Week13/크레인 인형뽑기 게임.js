//크레인 인형뽑기 게임, +5
// 소요시간: ??분

// 테스트 1 〉	통과 (0.23ms, 33.5MB)
// 테스트 2 〉	통과 (0.23ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.4MB)
// 테스트 4 〉	통과 (0.78ms, 33.9MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.22ms, 33.6MB)
// 테스트 7 〉	통과 (0.26ms, 33.4MB)
// 테스트 8 〉	통과 (0.46ms, 33.6MB)
// 테스트 9 〉	통과 (0.44ms, 33.8MB)
// 테스트 10 〉	통과 (0.46ms, 33.6MB)
// 테스트 11 〉	통과 (0.71ms, 33.9MB)

function solution(board, moves) {
  let count = 0;
  let stack = [];
  let arr = new Array(board.length).fill([]);
  
  for(let i = 0; i < board.length; i++){
      board[i].map((el,idx) => {
          arr[idx] = [...arr[idx], el];
      })
  }
  
  arr = arr.map(el => el.filter(item => item !== 0));
  
  moves.map(el => {
      let doll = arr[el-1].shift();
      
      if(doll && doll !== stack.at(-1)) stack.push(doll);
      else if(doll && doll === stack.at(-1)){
          count += 2;
          stack.pop();
      }
  })
  
  return count;
}