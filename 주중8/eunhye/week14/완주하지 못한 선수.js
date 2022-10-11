function solution(participant, completion) {
  completion.sort();
  participant.sort();

  return participant.filter((el, idx) => {
    if (completion[idx] !== el) return el;
  })[0];
}
