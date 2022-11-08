function solution(a, b) {
  const weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return weeks[daySum % 7];
}
