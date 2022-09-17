function solution(numbers, hand) {
  let answer = '';
  let lastL = -1, lastR = -10; //마지막 왼오른손 엄지가 누른 번호 저장
  let handChar = (hand === "left") ? 'L' : 'R';

  for (let i of numbers) {
    let list = [lastL, lastR, i];
    if (i === 1 || i === 4 || i === 7) {
      answer += ("L");
      lastL = i;
    }
    else if (i === 3 || i === 6 || i === 9) {
      answer += ("R");
      lastR = i;
    }
    else { // 2580일 경우

      if ((!lastL || !lastR) && (lastL !== 0 && lastR !== 0)) {
        answer += (handChar);
        (handChar === 'L') ? lastL = i : lastR = i;
      } else {
        // 좌표 찾기
        let list = [lastL, lastR, i];
        // 마지막 왼손 마지막 오른손 눌러야 할 번호
        let listPosition = list.map(el => findPosition(el));

        // 거리 찾기
        let curNumPosition = listPosition.pop(); // 현재 눌러야 하는 번호의 위치
        let listDistance = listPosition.map(el => getDistance(el, curNumPosition));
        // 눌러야 할 번호로부터 [왼손의 거리, 오른손의 거리]
        // 두 손의 거리가 같으면 handChar 추가 후 다음으로 넘어가기
        if (listDistance[0] === listDistance[1]) {
          answer += handChar;
          (handChar === 'L') ? lastL = i : lastR = i;
          continue;
        }

        // 더 적은 거리에 있는 숫자? 손위치?를 누르게 하기
        let nextPosition = listPosition[listDistance.indexOf(Math.min(...listDistance))];
        let shortIndex = listDistance.indexOf(Math.min(...listDistance));
        // 찾은 위치 [1,0]에 있는 숫자 번호 알아와서 해당 번호를 누르고 있는 손으로
        // 다음 번호 누르기
        console.log(nextPosition);
        let nextNum = findNumber(nextPosition); // [1,0] 주고 번호 알아내기
        console.log("nextNum:", nextNum);

        // 더 짧은 인덱스만 알아와서 0번이면 왼쪽, 1번이면 오른쪽 누르기
        if (shortIndex === 0) {
          answer += 'L';
          lastL = i;
        } else if (shortIndex === 1) {
          answer += 'R';
          lastR = i;
        }

      }

    }

  }
  return answer;
}

function findPosition(num) {
  let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, 0, -10]]
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[i][j] === num)
        return [i, j];
    }
  }
}

function findNumber(numarr) {
  let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, 0, -10]];
  return keypad[numarr[0]][numarr[1]];
}

function getDistance(arr1, arr2) {
  let distance = Math.sqrt((arr1[0] - arr2[0]) ** 2 + (arr1[1] - arr2[1]) ** 2);
  return Math.ceil(distance);
}



