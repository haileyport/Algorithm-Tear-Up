
// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.12ms, 33.6MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.6MB)
// 테스트 5 〉	통과 (0.11ms, 33.5MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.12ms, 33.5MB)
// 테스트 8 〉	통과 (0.11ms, 33.6MB)
// 테스트 9 〉	통과 (0.11ms, 33.4MB)
// 테스트 10 〉	통과 (0.12ms, 33.4MB)
// 테스트 11 〉	통과 (0.10ms, 33.5MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)
// 테스트 13 〉	통과 (0.10ms, 33.5MB)
// 테스트 14 〉	통과 (0.11ms, 33.5MB)
// 테스트 15 〉	통과 (0.10ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.5MB)
// 테스트 17 〉	통과 (0.11ms, 33.4MB)
// 테스트 18 〉	통과 (0.11ms, 33.5MB)
// 테스트 19 〉	통과 (0.10ms, 33.5MB)
// 테스트 20 〉	통과 (0.10ms, 33.5MB)


function solution(n, lost, reserve) {
    // n : 전체 학생 수
    // lost : 체육복을 도난당한 학생들의 번호가 담긴 배열
    // reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
    
    // 바로 앞번호, 바로 뒷번호 학생에게만 체육복을 빌려줄 수 있다.
    // 최대한 많은 학생이 체육복을 빌려서 수업을 들어야한다.
    // 여벌의 옷을 가져온 학생이 도난을 당할 수 있다. (그럴경우 남은 체육복이 하나이므로 다른 애들한테 대여 불가능)
    
    // Greedy Algorithm : 탐욕스러운 알고리즘 (당장 닥친 문제에서 베스트를 선택한다).
    
    // 일단 처음상태에서 체육복이 있는 학생들의 수를 구하자
    // 그다음 lost에 있는 학생들을 순차적으로 순회하면서
    // reserve의 첫번째 학생부터 lost - reserve의 절대값이 1이면
    // reserve에서 unshift로 제거
    // 그리고 체육복이 있는 학생수에서 1증가
    
    
    let hasSuit = n - lost.length;
    let sortedLost = lost.sort((a,b) => a -b);
    let sortedReserve = reserve.sort((a,b) => a -b);

    
    for (let i = 0; i < sortedLost.length;){
        if (sortedReserve.includes(sortedLost[i])){
            sortedReserve.splice(sortedReserve.indexOf(sortedLost[i]), 1);
            sortedLost.splice(i, 1);
            hasSuit++;
        }else {
            i++;
        }
    }
    
    if (!sortedLost){
        return hasSuit;
    }
    
    sortedLost.forEach((el, idx) => {
        if (sortedReserve.includes(el + 1) && sortedReserve.includes(el - 1)){
            sortedReserve.splice(sortedReserve.indexOf(el - 1), 1);
            hasSuit++;
        }else if (sortedReserve.includes(el + 1)){
            sortedReserve.splice(sortedReserve.indexOf(el + 1), 1);
            hasSuit++;
        }else if (sortedReserve.includes(el - 1)){
            sortedReserve.splice(sortedReserve.indexOf(el - 1), 1);
            hasSuit++;
        }
    })
  
    
    return hasSuit;
    
}