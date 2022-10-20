function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);

  const report_list = {};

  id_list.forEach((el) => {
    report_list[el] = [];
  });

  // id별로 누구한테 신고 받았는지
  report.forEach((el) => {
    const splitReport = el.split(" ");
    const user_id = splitReport[0]; // 신고한 사람
    const report_id = splitReport[1]; // 신고 받은 사람

    if (!report_list[report_id].includes(user_id))
      report_list[report_id].push(user_id);
  });

  // 신고 결과 메일 보내기
  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].forEach((el) => {
        answer[id_list.indexOf(el)]++;
      });
    }
  }

  return answer;
}
