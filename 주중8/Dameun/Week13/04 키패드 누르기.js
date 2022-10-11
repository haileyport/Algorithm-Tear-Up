function solution(numbers, hand) {
  let currentR;
  let currentL;
  let lorR = [];

  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const mid = [2, 5, 8, 0];

  while (numbers.length > 0) {
    if (left.includes(numbers[0])) {
      lorR.push("L");
      currentL = numbers[0];
    } else if (right.includes(numbers[0])) {
      lorR.push("R");
      currentR = numbers[0];
    } else if (left.includes(numbers[0])) {
    }
  }
}

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
  //1 4 7은 왼손
  //3 6 9 는 오른손
  //2 5 8 0은 더 가까운거
  //똑같으면 자기 손으로
  //바로 옆에 있거나. 두번째이거나. 제일 멀거나
  //변수로 현재
];
