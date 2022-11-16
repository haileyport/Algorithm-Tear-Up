// 키패드 누르기, (실패)

// 인덱스로 접근 시도했으나 손이 middle(2,5,8,0)에 위치하고 있는데 다음 수가 middle인 경우 정확한 거리비교가 되지 않음 
function solution(numbers, hand) {
  let result = [];
  let leftHand = 3;
  let rightHand = 3;
  const left = [1,4,7];
  const middle = [2,5,8,0];
  const right = [3,6,9];
  
  numbers.map(el => {
      if(left.includes(el)) {
        result.push('L');
          leftHand = left.indexOf(el);
      } 
      else if(right.includes(el)) {
        result.push('R');
          rightHand = right.indexOf(el);
      } 
      else {
        let idx = middle.indexOf(el);
          let leftGap = Math.abs(idx - leftHand);
          let rightGap = Math.abs(idx - rightHand);
          
          if(leftGap > rightGap){
              result.push('R');
              rightHand = idx;
          }else if(rightGap > leftGap){
              result.push('L');
              leftHand = idx;
          }else {
              if(hand === right){
                  result.push('R');
                  rightHand = idx;
              }else{
                  result.push('L');
                  leftHand = idx;
              }
          }
          
      }
  })
  
  return result.join('');
}

// 다른 사람 풀이 해석시도 
function solution(numbers, hand) {
  let answer = '';
  const len = numbers.length;
  //객체로 키의 위치 값을 만듦 (x,y좌표)
  const keypad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      "*": [3, 0], 0: [3, 1], "#": [3, 2]
  };
  //키와 키 사이의 거리를 확인하는 함수
  const getLen = (key1, key2) => Math.abs(key1[0] - key2[0]) + Math.abs(key1[1] - key2[1]);
  
//현재 왼쪽과 오른쪽의 위치 값
  let curLeft = keypad["*"];
  let curRight = keypad["#"];

  // numbers를 돌며 거리비교 
  for(let i=0; i<len; i++) {
      if(numbers[i] % 3 === 1) { // 왼손 담당인 1,4,7은 3으로 나누었을 시, 1이 나머지가 되므로 
          //왼쪽의 키 값
          answer += "L";
          curLeft = keypad[numbers[i]];
      } else if(numbers[i] !== 0 && numbers[i] % 3 === 0) { // 오른손 담당인 3,6,9 겨냥한 조건 
          //오른쪽의 키 값
          answer += "R";
          curRight = keypad[numbers[i]];
      } else {
          //가운데 값일 경우 거리를 확인해서 가까운 손을 사용
          let leftLen = getLen(curLeft, keypad[numbers[i]]);
          let rightLen = getLen(curRight, keypad[numbers[i]]);
          
          if(leftLen === rightLen) {//거리가 같은 경우
              if(hand === "left") { //왼손잡이라면?
                  answer += "L";
                  curLeft = keypad[numbers[i]];
              } else { // 오른손 잡이라면?
                  answer += "R";
                  curRight = keypad[numbers[i]];
              }
          } else if(leftLen > rightLen) { // 오른손이 더 가까운 경우
              answer += "R";
              curRight = keypad[numbers[i]];
          } else { // 왼손이 더 가까운 경우 
              answer += "L";
              curLeft = keypad[numbers[i]];
          }
      }
  }
  return answer;