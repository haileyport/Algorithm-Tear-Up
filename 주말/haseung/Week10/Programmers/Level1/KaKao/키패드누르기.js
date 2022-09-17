//맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

//hand는 "left" 또는 "right"
//왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요

//solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")

function solution(numbers, hand) {
  // *와 #을 특정 숫자로 가정(*은 star, #은 hashTag로 )
  // 누른 숫자에 따라 *,#에 할당된 숫자를 업데이트한 후에 L인지 R인지를 리턴
  // 1,4,7 중에 하나를 누르면 *에 할당된 수를 누른 숫자로 재할당
  // 3,6,9 중에 하나를 누르면 #에 할당된 수를 누른 숫자로 재할당
  // 2,5,8 중에 하나를 누르면 그 누른 숫자의 위치를 알아내서 변수에 할당
  // 0이면 무조건 R 리턴(이거는 맞는지는 모르겠음)
  // 누른 숫자의 좌표와 왼손으로 눌렀었던 숫자 좌표와의 거리 계산
  // 누른 숫자의 좌표와 오른손으로 눌렀었던 숫자 좌표와의 거리 계산
  // 거리가 같은 경우, 왼손,오른손 여부를 따져서 L or R 리턴
  // left가 작으면 더 가까운 거리라는 말이니까 그 숫자를 leftNum으로 할당하고 L 리턴
  // right가 작으면 그 숫자를 rightNum으로 할당하고 R 리턴

  let star = 10;
  let hashTag = 12;

  const leftTo = (num) => {
    //1,4,7을 누른 경우
    star = num;
    return "L";
  };

  const rightTo = (num) => {
    //3,6,9를 누른 경우
    hashTag = num;
    return "R";
  };

  const numOfLocation = (num) => {
    return [Math.floor((num - 1) / 3), (num - 1) % 3];
  };

  const distanceBetweenLocation = (numArray1, numArray2) => {
    return Math.abs(numArray1[0] - numArray2[0]) + Math.abs(numArray1[1] - numArray2[1]);
  };

  return numbers
    .map((number) => {
      if (number === 0) number = 11; //0이면 11로 바꾸기
      if (number % 3 === 1) {
        return leftTo(number);
      } else if (number % 3 === 0) {
        return rightTo(number);
      } else {
        const location = numOfLocation(number); //누른 숫자의 현재 위치
        const leftNumber = distanceBetweenLocation(numOfLocation(star), location); //이전에 눌러놨던 숫자와 그 다음에 누른 숫자 간의 거리
        const rightNumber = distanceBetweenLocation(numOfLocation(hashTag), location); //#과 현재 누른 숫자 간의 거리

        if (leftNumber === rightNumber) {
          return hand === "left" ? leftTo(number) : rightTo(number); //두 거리가 같은 경우 왼손이면 L 리턴 오른손이면 R 리턴
        } else if (leftNumber < rightNumber) {
          return leftTo(number);
        } else {
          return rightTo(number);
        }
      }
    })
    .join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); //LRLLLRLLRRL
