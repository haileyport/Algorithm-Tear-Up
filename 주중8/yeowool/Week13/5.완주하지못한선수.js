// [PGS] 완주하지 못한 선수 / leve2
// 난이도 :  leve2
// 풀이시간 : 1시간
// 점수 : 5  
 

/*
문제
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

/*
<의사코드>
1. for문으로 배열을 돌변서 포함 되어 있는지 없는지 확인했다.
*/


function solution(participant, completion) {
  for(let i = 0; i < participant.length; i++) {
      if(!completion.includes(participant[i])) {
          return participant[i]
      }
              
  }
}


/*
실패
동명이인을 가려낼 수가 없었다.

테스트 1
입력값 〉	["leo", "kiki", "eden"], ["eden", "kiki"]
기댓값 〉	"leo"
실행 결과 〉	테스트를 통과하였습니다.
테스트 2
입력값 〉	["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]
기댓값 〉	"vinko"
실행 결과 〉	테스트를 통과하였습니다.
테스트 3
입력값 〉	["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]
기댓값 〉	"mislav"
실행 결과 〉	실행한 결괏값 undefined가 기댓값 "mislav"과 다릅니다.

두 배열을 모두 정렬해서 요소의 순서를 같게 한 후에
앞의 배열이 더 길이가 기니까 participant배열을 기준으로 배열을 돌면서
arr와 arr2의 i번째 요소가 다를 경우 다른 요소를 내보내도록 했다.
*/

function solution(participant, completion) {
  let arr = participant.sort()
  let arr2 = completion.sort()

  for(let i = 0; i < participant.length; i++) {
    if(arr[i] !== arr2[i]) {
      return arr[i]
    }
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.6MB)
테스트 3 〉	통과 (0.33ms, 33.6MB)
테스트 4 〉	통과 (0.60ms, 33.6MB)
테스트 5 〉	통과 (0.58ms, 33.7MB)
효율성  테스트
테스트 1 〉	통과 (46.73ms, 47.4MB)
테스트 2 〉	통과 (74.32ms, 52.9MB)
테스트 3 〉	통과 (83.50ms, 54.8MB)
테스트 4 〉	통과 (102.67ms, 58.4MB)
테스트 5 〉	통과 (100.80ms, 56.6MB)
*/