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
    star = num;
    return "L";
  };

  const rightTo = (num) => {
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
      if (number === 0) number = 11;

      //1,4,7을 누른 경우
      if (number % 3 === 1) {
        return leftTo(number);
      } else if (number % 3 === 0) {
        return rightTo(number);
      } else {
        const location = numOfLocation(number);
        const leftNumber = distanceBetweenLocation(numOfLocation(star), location);
        const rightNumber = distanceBetweenLocation(numOfLocation(hashTag), location);

        if (leftNumber === rightNumber) {
          return hand === "left" ? leftTo(number) : rightTo(number);
        } else if (leftNumber < rightNumber) {
          return leftTo(number);
        } else {
          return rightTo(number);
        }
      }
    })
    .join("");
}
