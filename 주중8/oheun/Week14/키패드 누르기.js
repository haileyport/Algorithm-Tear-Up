/**
 * 통과 여부 : 통과
 * 시간 : 1시간 30분
 * 점수 : +5
 */

/**
 * 왼손은 * 오른손은 #
 * 상하좌우로만 이동
 * 1, 4, 7은 왼손
 * 3, 6, 9는 오른손
 * 2, 5, 8, 0은 가까운 쪽
 * 거리가 같다면 오른손잡이는 오른손 왼손잡이는 왼손
 * @param numbers 순서대로 누를 번호가 담긴 배열
 * @param hand 왼손잡이인지 오른손잡이인지
 * @returns 각 번호 누른 손이 왼손인지 오른손인지
 */ 
function solution(numbers, hand) {
  // 각 열의 0번째 index는 L
  // 각 열의 2번째 index는 R
  // 각 열의 1번째 index는 가까운 경우
  // 거리가 같을 때는 hand가 관여

  // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
  let leftHand = [10];
  let rightHand = [12];
  let answer = "";

  numbers.forEach((number) => {
    // for가 아닌갑네 그럼 3으로 나머지 기준으로 봐볼까
    // 만약 number가 keypad의 0번째 index에 해당한다면
    if (number % 3 === 1) {
      leftHand.push(number);
      answer += "L";
      console.log(1);
    } else if (number % 3 === 0 && number !== 0) {
      rightHand.push(number);
      answer += "R";
      console.log(2);
    } else {
      // 2, 5, 8, 0
      // 틀린 이유 1) 음수 비교됨 => 절댓값 붙여줌.
      // 틀린 이유 2) 빼고 더하기 말고 위치도 생각해봐야 함 2와 4는 5와 1 차이다
      // 틀린 이유 3) 0을 처리를 못 함. 11로 치환
      // 틀린 이유 4) 초기 * #에서 이동할 때 문제 => *을 10으로 #을 12로
      if (number === 0) number = 11;
      let L = Math.abs(number - leftHand.slice(-1));
      let R = Math.abs(number - rightHand.slice(-1));

      let tmpL = Math.floor(L / 3) + Math.floor(L % 3);
      let tmpR = Math.floor(R / 3) + Math.floor(R % 3);

      if (tmpL > tmpR) {
        rightHand.push(number);
        answer += "R";
        console.log(3);
      } else if (tmpL < tmpR) {
        leftHand.push(number);
        answer += "L";
        console.log(4);
      } else {
        if (hand === "right") {
          rightHand.push(number);
          answer += "R";
          console.log(5);
        } else {
          leftHand.push(number);
          answer += "L";
          console.log(6);
        }
      }
    }
  });
  return answer;
}

/*
테스트 1 〉	통과 (0.13ms, 33.4MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.10ms, 33.4MB)
테스트 4 〉	통과 (0.10ms, 33.4MB)
테스트 5 〉	통과 (0.11ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.4MB)
테스트 7 〉	통과 (0.11ms, 33.5MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
테스트 10 〉	통과 (0.12ms, 33.4MB)
테스트 11 〉	통과 (0.24ms, 33.5MB)
테스트 12 〉	통과 (0.23ms, 33.5MB)
테스트 13 〉	통과 (0.40ms, 33.4MB)
테스트 14 〉	통과 (0.46ms, 33.5MB)
테스트 15 〉	통과 (0.44ms, 33.5MB)
테스트 16 〉	통과 (0.53ms, 33.5MB)
테스트 17 〉	통과 (0.63ms, 33.7MB)
테스트 18 〉	통과 (0.58ms, 33.6MB)
테스트 19 〉	통과 (0.64ms, 33.7MB)
테스트 20 〉	통과 (0.81ms, 33.5MB) */