function solution(n, lost, reserve) {
  const students = Array.from({ length: n + 1 }, () => 1);

  lost.forEach((lostStudent) => students[lostStudent]--);
  reserve.forEach((reserveStudent) => students[reserveStudent]++);

  let cnt = 0;
  students.forEach((student, i) => {
    if (student === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        student++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        student++;
      } else cnt++;
    }
  });

  return n - cnt;
}
