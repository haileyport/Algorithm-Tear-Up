// 중복없애기
// 신고 당한 횟수 구하기
// 정지 id 구하기
// 정지 id를 신고한 사람 뽑아내서 각각 이름에 횟수 더하기

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

/* my solution
function solution(id_list, report, k) {
  let newReport = [...new Set(report)].map((el) => el.split(" "));
  console.log("newReport", newReport);
  let count = {};
  for (let el of newReport) {
    // count 안에 el이 없으면 1로 만들고 있으면 1씩 더하기
    count[el[1]] = count[el[1]] ? count[el[1]] + 1 : 1;
  }
  console.log("count", count);
  let over = [];
    for (let el in count) {
    if (count[el] >= k) {
      over.push(el);
    }
  }
  console.log("over", over);
  // 0으로 4개가 들어있는 배열 만들기
  let names = [];
  for (let i = 0; i < over.length; i++) {
    for (let j = 0; j < newReport.length; j++) {
      if (over[i] === newReport[j][1]) {
        names.push(newReport[j][0]);
      }
    }
  }
  console.log("names", names);

  return id_list.map((id) => names.filter((el) => el === id).length);
}
*/

function solution(id_list, report, k) {
  const reportResult = report.reduce((a, c) => {
    const [user, reported] = c.split(" ");
    a[reported] = a[reported] ? a[reported].add(user) : new Set().add(user);
    return a;
  }, {});

  const mailed = Object.values(reportResult)
    .filter((set) => set.size >= k)
    .flatMap((set) => [...set]);
  return id_list.map((id) => mailed.filter((user) => user === id).length);
}
