function solution(id_list, report, k) {
  var answer = [];
  //전체 이용자 id_list, 신고한 정보 report, 정지 기준 신고 수 k
  //report는 각 인덱스마다 "신고자 피신고자"로 구성
  //피신고자의 신고 스텍이 k개 이상인 경우 신고자, 피신고자에게 신고

  //id당 신고한 사람을 저장해 obj
  //obj를 for in으로 돌면서 신고당한 횟수를 또 다른 obj에 카운트
  //k번 이상 신고당한 사람 >> for in을 돌면서 신고한 사람에게 이메일이 가도록 answer의 인덱스에 ++;

  const reportList = {}; //reportList는 중복이 없는 객체

  const bad = {};

  const result = {};

  id_list.map((el) => {
    reportList[el] = [];
    bad[el] = 0;
    result[el] = 0;
  });

  //id당 신고한 사람 이름 obj
  for (i = 0; i < report.length; i++) {
    const info = report[i].split(" ");
    const isReported = reportList[info[0]].includes(info[1]);
    if (!isReported) {
      reportList[info[0]] = reportList[info[0]].concat([info[1]]);
    } //중복 안되게
  }

  for (i = 0; i < id_list.length; i++) {
    let a = 0;
    for (key in reportList) {
      if (reportList[key].includes(id_list[i])) {
        a++;
      }
    }
    if (a >= k) {
      for (reporter in reportList) {
        if (reportList[reporter].includes(id_list[i])) {
          result[reporter] += 1;
        } //신고자
      }
    }
  }

  answer = Object.values(result);

  return answer;
}
