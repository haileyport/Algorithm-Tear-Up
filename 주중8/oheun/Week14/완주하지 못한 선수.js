/**
 * 통과 여부 :
 * 시간 : 1시간
 * 점수 :
 * 틀린 이유 :
 * 1. 시간 초과 
 *  - 보통 길이가 100,000인 문제들은 O(nlogn)의 해결방법으로 푸셔야 시간초과가 발생하지 않습니다.
 */

/**
 * 
 * @param {*} participant 마라톤 참여 선수
 * @param {*} completion 완주한 선수
 * @returns 완주하지 못한 선수
 */
// function solution(participant, completion) {
//     /*
//     1. filter 메서드를 통해 참가자 배열에 있는 요소가 완주 선수 배열에도 있지 않은 사람을 반환한다.
//     2. 중복된 값이 있다면 완주자에 해당하지 않으므로 추가
//     */
//     return participant.filter((el, idx) => {
//         if(participant.indexOf(el)===idx){
//             return !completion.includes(el);
//         }
//         //동명이인 처리
//         // 중복된 값이 있다면 완주자에 해당하지 않으므로 추가
//         return completion.includes(el);
//     }).join('');
// }

// function solution(participant, completion) {
//     // 배열 중복 검사
//     let checkArray = new Set(participant);

//     return participant
//     .filter((el, idx) => {
//          // 중복되지 않았으면
//             return checkArray.size === participant.length?
//             !completion.includes(el)
//             : (participant.indexOf(el)!==idx);
//     })
//     .join('');
    
// }

// 내가 뭐하다 푼 걸까..?
/**
 * 테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.22ms, 33.6MB)
테스트 3 〉	통과 (6.54ms, 38.1MB)
테스트 4 〉	통과 (21.12ms, 38.2MB)
테스트 5 〉	통과 (15.14ms, 38.1MB)

효율성 테스트는 실패
 */

/*
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