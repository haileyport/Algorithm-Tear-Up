function solution(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬

  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
