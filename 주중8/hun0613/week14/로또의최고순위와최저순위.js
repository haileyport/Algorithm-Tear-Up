// level.1

// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.10ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.07ms, 33.5MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.11ms, 33.5MB)
// 테스트 12 〉	통과 (0.07ms, 33.6MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.4MB)
// 테스트 15 〉	통과 (0.07ms, 33.5MB)

// 4점

function solution(lottos, win_nums) {
    // lottos : 민우가 구매한 로또번호를 담은 배열
    // win_nums : 당첨 번호를 담은 배열
    
    // [최고순위, 최저순위] 리턴
    
    // 1위 : 6/6
    // 2위 : 5/6
    // 3위 : 4/6
    // 4위 : 3/6
    // 5위 : 2/6
    // 6위 : 1/6 이하
    
    
    // 0은 확인할 수 없는 부분
    
    // 0을 제외한 나머지 숫자 중 win_nums에 있는 숫자의 갯수를 확보
    // -> 그 개수에 해당하는 순위가 최저순위가 된다.
    // 최고순위는 0에 해당하는 숫자들도 win_nums에 있다고 생각하는 경우다.
    // 0의 갯수도 당첨된 숫자의 개수에 추가
    // 그게 최고순위
    

    let hitNumbers = lottos.map(el => {
        if (win_nums.includes(el)){
            return true;
        }else{
            return el;
        }
    })

    let hitCount = hitNumbers.filter(el => el === true).length;
    let wantToHit = hitNumbers.filter(el => el === 0).length;
    
    let worstCase = hitCount === 0 ? 6 : 6 - hitCount + 1;
    let bestCase = hitCount + wantToHit === 0 ? 6 : 6 - (hitCount + wantToHit) + 1;
    
    return [bestCase, worstCase]
    
    
    
}