function getDistance(start, target) {
  let distance = 0;
  // 거리 = 행 인덱스 차이 + 열 인덱스 차이
  distance += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  distance += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);

  return distance;
}

function solution(numbers, hand) {
  var answer = "";

  const dial = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let leftHand = dial["*"]; // 왼손 위치
  let rightHand = dial["#"]; // 오른손 위치

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    let isLeft = false; // 왼손으로 누르는지

    if (number === 1 || number === 4 || number === 7) {
      isLeft = true;
    } else if (number === 3 || number === 6 || number === 9) {
      isLeft = false;
    } else {
      const leftDistance = getDistance(leftHand, dial[number]); // 현재 왼손 위치와 누를 키패드 사이의 거리
      const rightDistance = getDistance(rightHand, dial[number]); // 현재 오른손 위치와 누를 키패드 사이의 거리
      if (leftDistance < rightDistance) {
        isLeft = true;
      } else if (leftDistance > rightDistance) {
        isLeft = false;
      }
      if (leftDistance === rightDistance) {
        // 왼손 오른손 거리가 같으면
        if (hand === "left") {
          isLeft = true;
        } else {
          isLeft = false;
        }
      }
    }

    if (isLeft) {
      answer += "L";
      leftHand = dial[number];
    } else {
      answer += "R";
      rightHand = dial[number];
    }
  }

  return answer;
}

// 참고 - https://velog.io/@hadam/JS-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%82%A4%ED%8C%A8%EB%93%9C-%EB%88%84%EB%A5%B4%EA%B8%B0
