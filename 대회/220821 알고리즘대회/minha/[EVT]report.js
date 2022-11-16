function solution(id_list, report, k) {
  let answer = Array(id_list.length).fill(0);
  let reportCount = Array(id_list.length).fill(0);
  let reportedCount = Array(id_list.length).fill(0);

  // 중복 신고 제거
  report = [...new Set(report)];
  report = report.map(el => el.split(' '));
  // 신고 횟수만큼 반복
  for (let i = 0; i < report.length; i++) {

    id_list.map(el => {
      // 신고한 횟수 counter
      if (el === report[i][0]) {
        let reportIdIndex = id_list.indexOf(report[i][0]);
        reportCount[reportIdIndex]++;

      }

      // 신고 당한 횟수 counter
      if (el === report[i][1]) {

        let reportedIdIndex = id_list.indexOf(report[i][1]);
        reportedCount[reportedIdIndex]++;

      }
    });
  }

  // k번 이상 신고당했는지 판단
  id_list.map(el => {
    if (reportedCount[id_list.indexOf(el)] >= k) {
      //k번 이상 신고된 사람이 report의 1번째에 있다면 0번째 사람 answer 1씩 추가

      for (let i = 0; i < report.length; i++) {
        if (report[i][1] === el) {
          answer[id_list.indexOf(report[i][0])]++;
        }
      }
    }
  })

  return answer;
}