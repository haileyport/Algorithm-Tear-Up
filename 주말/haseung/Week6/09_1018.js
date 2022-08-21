const inputs = [
  "8 8",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBBBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const [height, width] = inputs[0].split(" ").map((el) => parseInt(el)); //height,width를 입력받아서 배열을 만든다.
// console.log(height, width); // 8 8
const board = []; // 빈 배열을 만든다.

for (let i = 1; i <= height; i++) {
  //1부터 height까지 반복
  let row = inputs[i].split(""); //inputs[i]를 입력받아서 배열을 만든다.
  board.push(row); //board에 row를 추가한다.
}

// console.log(board);
// [
//     [
//       'W', 'B', 'W',
//       'B', 'W', 'B',
//       'W', 'B'
//     ],
//     [
//       'B', 'W', 'B',
//       'W', 'B', 'W',
//       'B', 'W'
//     ],
//     [
//       'W', 'B', 'W',
//       'B', 'W', 'B',
//       'W', 'B'
//     ],
//     [
//       'B', 'W', 'B',
//       'B', 'B', 'W',
//       'B', 'W'
//     ],
//     [
//       'W', 'B', 'W',
//       'B', 'W', 'B',
//       'W', 'B'
//     ],
//     [
//       'B', 'W', 'B',
//       'W', 'B', 'W',
//       'B', 'W'
//     ],
//     [
//       'W', 'B', 'W',
//       'B', 'W', 'B',
//       'W', 'B'
//     ],
//     [
//       'B', 'W', 'B',
//       'W', 'B', 'W',
//       'B', 'W'
//     ]
//   ]

const SIZE = { x: 8, y: 8 }; // 8X8의 판을 만들어서 입력받은 좌표에서 시작

function countNeedPainting(startRowNum, startColNum, startColor) {
  //   console.log(startRowNum, startColNum, startColor); //0 0 B
  let nextColor = startColor;
  //   console.log(nextColor); //B
  let count = 0;
  for (let i = startRowNum; i < startRowNum + SIZE.x; i++) {
    for (let j = startColNum; j < startColNum + SIZE.y; j++) {
      if (board[i][j] !== nextColor) {
        count++;
      }
      nextColor = nextColor === "B" ? "W" : "B";
    }
    nextColor = nextColor === "B" ? "W" : "B";
  }
  return count;
}

let min = SIZE.x * SIZE.y;

for (let i = 0; i <= height - SIZE.x; i++) {
  //0부터 height-SIZE.x까지 반복
  for (let j = 0; j <= width - SIZE.y; j++) {
    //0부터 width-SIZE.y까지 반복
    const blackCount = countNeedPainting(i, j, "B"); //i,j에서 시작해서 B를 칠해야하는 개수를 구한다.
    const whiteCount = SIZE.x * SIZE.y - blackCount;
    const currentMin = blackCount > whiteCount ? whiteCount : blackCount;

    if (min > currentMin) {
      min = currentMin;
    }
  }
}

console.log(min);
