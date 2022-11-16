function solution(land) {
    let answer = [];
    let len = land.length;
    for (let i = 1; i < len; i++) {
        land[i][0] += Math.max(
            land[i - 1][1],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][1] += Math.max(
            land[i - 1][0],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][2] += Math.max(
            land[i - 1][0],
            land[i - 1][1],
            land[i - 1][3]
        );
        land[i][3] += Math.max(
            land[i - 1][0],
            land[i - 1][1],
            land[i - 1][2]
        );
    }
    answer = land[land.length - 1];

    return Math.max(...answer);
}

//
// function solution(land) {
//     for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
//       for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
//         land[rowIndex][colIndex] += Math.max(
//           ...land[rowIndex - 1].slice(0, colIndex), 
//           ...land[rowIndex - 1].slice(colIndex + 1))
//       }
//     }
//     return Math.max(...land[land.length - 1])
//   }
// 이방식도 존재
