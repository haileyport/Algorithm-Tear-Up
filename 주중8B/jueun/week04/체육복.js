function solution(n, lost, reserve) {
  // 바로 앞 or 뒷 번호 학생에게만 빌려줄 수 있다...
  let students = new Array(n).fill(0);

  for (let i = 0; i < reserve.length; i++) {
    // students 초기화
    students[reserve[i] - 1] = "T";
  }
  for (let i = 0; i < lost.length; i++) {
    if (students[lost[i] - 1] === "T") students[lost[i] - 1] = 0;
    else students[lost[i] - 1] = "L";
  }

  let possible = 0;

  for (let i = 0; i < n; i++) {
    if (students[i] !== "L") possible++;
  }

  for (let i = 0; i < n; i++) {
    // [ 0, 'L', 'T', 'L', 0 ]
    if (students[i] === "L") {
      for (let j = i - 1; j <= i + 1; j++) {
        if (students[j] === "T") {
          possible++;
          students[j] = 0;
          break;
        }
      }
    }
  }

  return possible;
}
