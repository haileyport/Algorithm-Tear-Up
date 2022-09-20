function solution(record) {
  // state / uid / name
  // 입장 > 마지막 name을 기준으로
  // 퇴장 > 마지막 name을 기준으로
  let answer = [];

  record = record.map((el) => el.split(" "));

  const chat = {};

  for (i = 0; i < record.length; i++) {
    if (record[i][0] === "Leave") continue;
    chat[record[i][1]] = record[i][2];
  }

  for (n = 0; n < record.length; n++) {
    const id = record[n][1];
    switch (record[n][0]) {
      case "Enter":
        answer.push(`${chat[id]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${chat[id]}님이 나갔습니다.`);
        break;
    }
  }

  return answer;
}
