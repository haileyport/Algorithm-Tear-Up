function solution(record) {
  var answer = [];
  let arr = record.map(el => el.split(' '))

  let user = [];
  arr.map(el => {
    if (el[0] === 'Enter') {
      // 이미 그 이전에 들어왔던 uid라면 이름만 변경하기
      user.forEach(v => {
        if (v.uid === el[1]) v.name = el[2];
      })
      // 아니면 새로 추가
      let userData = {
        uid: el[1],
        name: el[2],
        action: "들어왔습니다"
      };
      user.push(userData);

    }
    else if (el[0] === 'Leave') {
      let userData = {};
      userData.uid = el[1]
      //user에서 일치하는 uid의 이름 가져와서 userData의 이름으로 하기
      user.forEach(v => {
        if (v.uid === el[1]) userData.name = v.name;
      })
      userData.action = "나갔습니다";

      user.push(userData);
    }
    else if (el[0] === 'Change') {
      user.forEach(v => {
        if (v.uid === el[1]) v.name = el[2];
      })
    }
  })

  user.map(el => {
    answer.push(`${el.name}님이 ${el.action}.`);
  })
  return answer;
}