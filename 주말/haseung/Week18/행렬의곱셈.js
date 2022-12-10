function solution(arr1, arr2) {
  const [row, col] = [arr1.length, arr2[0].length]; //3 2
  let answer = new Array(row);
  for (let i = 0; i < row; i++) {
    answer[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      answer[i][j] = arr1[i].reduce((acc, val, index) => acc + val * arr2[index][j], 0);
    }
  }
  return answer;
}
