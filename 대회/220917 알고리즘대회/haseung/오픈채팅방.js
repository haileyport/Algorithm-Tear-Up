function solution(records) {
  //채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
  // 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
  // 채팅방에서 닉네임을 변경한다.

  //유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.

  // 큐 자료구조를 써야 하나...?
  // 중복을 왜 허용하는거임...

  //첫 단어는 Enter, Leave, Change 중 하나이다.
  // Enter, Leave, Change 이렇게 분기 나눠서 해야할 듯?

  let answers = [];
  let people = [];

  const map = (f, iter) => {
    const newArray = [];
    for (const a of iter) {
      newArray.push(f(a));
    }
    return newArray;
  };

  map((record) => {
    let splitedRecord = record.split(" ");
    if (splitedRecord[0] === "Enter") {
      answers.push(splitedRecord[1] + "  님이 들어왔습니다.");
      people[splitedRecord[1]] = splitedRecord[2];
    } else if (splitedRecord[0] === "Leave") {
      answers.push(splitedRecord[1] + "  님이 나갔습니다.");
    } else {
      people[splitedRecord[1]] = splitedRecord[2];
    }
  }, records);

  let result = [];
  answers.map((answer) => {
    let splitedAnswer = answer.split("  ");
    result.push(people[splitedAnswer[0]] + splitedAnswer[1]);
  });
  return result;
}
