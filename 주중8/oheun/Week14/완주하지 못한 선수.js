/**
 * 통과 여부 : 통과
 * 시간 : 20분
 * 점수 : + 4
 */

/**
 *
 * @param {*} participant 마라톤 참여 선수
 * @param {*} completion 완주한 선수
 * @returns 완주하지 못한 선수
 */
 function solution(participant, completion) {
    // 배타적 논리합 : 교집합을 제외하고 남는 것
    // 동명이인은 포함해야 함.
    // 지금은 교집합 아예 뺐으니까 교집합에 해당되는 요소 중에 동명이인 세트 제외하고 넣으면 어떨까
    // sort 이용해서 정렬 후 index 비교하기
  
    let participantArr = participant.sort();
    let completionArr = completion.sort();
  
    for (let i = 0; i < participant.length; i++) {
        let a = participantArr[i];
        let b = completionArr[i];
        
        // 일치하면 한 놈씩 지우고, 아니 지울 필요 없이 그냥 일치 안하면?
        // 않이 이렇게 해서 쉽게 풀리네 승질
        if (a !== b) {
            return a
        }
    }
  }


/*
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant
    .filter((x, idx) => !completion.includes(x) || x !== completion[idx])
    .concat(completion.filter((x) => !participant.includes(x)))
    .join('');
}



function solution(participant, completion) {
   // 39

    let sumArr = [...participant, ...completion];
    // 나머지 요소에서 돌다가 같은 거 발견한 첫번째꺼 없애기
    let [head, ...tail] = sumArr;
    
    for (let i = 0; i < sumArr.length; i++){
        if (tail.indexOf(head)=== -1){ // 발견 못하면?
            return head;
        }
        // 첫번째꺼 발견하면 삭제
        tail.splice(tail.indexOf(head), 1);
        [head, ...tail] = tail;
    }
    }
 */

