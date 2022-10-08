function solution(participant, completion) {
  let map = new Map();
  // participant 이름 : 개수 로 추가
  participant.forEach(el => {
    if (map.has(el)) map.set(el, map.get(el) + 1);
    else map.set(el, 1);
  })
  // completion 돌면서 participant에 있으면 value -1씩
  completion.forEach(el => {
    if (map.has(el)) map.set(el, map.get(el) - 1);
  })
  // 다 돌고 남은 value가 1인 key 찾기
  // 이중배열로 나옴
  return [...map.entries()].filter(el => el[1] === 1)[0][0]

}