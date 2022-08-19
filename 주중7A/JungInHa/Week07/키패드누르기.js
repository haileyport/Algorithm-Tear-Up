function solution(numbers, hand) {
  var answer = '';
  const keypad = [[1, 4, 7, '*'], [2, 5, 8, 0], [3, 6, 9, '#']]
  
  let leftFinger = [0, 3];
  let rightFinger = [2, 3];
  let idx;

  function leftMove() { 
    answer += 'L';
    leftFinger = idx;
  }

  function rightMove() { 
    answer += 'R';
    rightFinger = idx;
  }
  
  for (let i = 0; i < numbers.length; i++) {
      let number = numbers[i];
      
      if (keypad[0].includes(number)) {
          idx = [0, keypad[0].indexOf(number)];
          leftMove();
      } else if (keypad[2].includes(number)) {
          idx = [2, keypad[2].indexOf(number)];
          rightMove();
      }
      
      else {
          idx = [1, keypad[1].indexOf(number)]; 

          let leftDist = Math.abs(1 - leftFinger[0]) + Math.abs(idx[1] - leftFinger[1])
          let rightDist = Math.abs(1 - rightFinger[0]) + Math.abs(idx[1] - rightFinger[1])
          
          if (leftDist > rightDist) {
              rightMove();
          } else if (leftDist < rightDist) {
              leftMove();
          } else {
              (hand === 'right') ? rightMove() : leftMove();
          }
      }
  }
  return answer;
}