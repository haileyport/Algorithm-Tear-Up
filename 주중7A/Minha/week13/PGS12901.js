function solution(a, b) {
  var answer = '';
  // 날 개수 0월~ 11월까지의 날
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let addingDays = 0;

  // 지나간 월별 일자 더하기
  for (let i = 0; i < a; i++) {
    addingDays += days[i];
  }
  // 지나간 일 더하기
  addingDays += b;

  // 1월 2일: 토 addingDays = 2; 0... 2
  let weekdayNum = addingDays % 7;

  switch (weekdayNum) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;


    default:
      break;
  }
  return answer;
}