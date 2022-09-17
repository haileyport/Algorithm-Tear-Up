// 점수처리기


function solution(n, info) {
    var answer = [];
    
    // n -> 화살의 갯수
    // info -> 10점부터 1점까지 어피치가 맞힌 화살 현황
    // 라이언이 이기는 점수를 리턴한다.
    
    // 어피치의 맞힌 화살의 개수가 1 이하라면 해볼만하다.
    // 어피치의 맞힌 화살의 개수가 2 이상이라면 포기하고 다른 방법을 찾는다.
    
    // info를 돌면서, 만약 info의 i번째 요소가 1이하라면 count = info[i] + 1 
        // count값을 answer에 푸쉬 (1개라도 더 맞히면 그 점수는 내 것)
        // 그리고, n - count (주어진 화살에서 쏜 것을 빼야하니까)
    // 만약, i가 info.length - 1 이라면 answer에 n을 푸쉬 (만약 마지막까지 화살의 갯수가 남으면 남은거 다 때려박기)
    // 그렇지않다면, answer에 0 푸쉬
    
    
    
    // 실패 : 어피치를 이길 수 있는 방법은 알지만, 큰 격차로 이기는 법을 모른다.
    // 큰 격차로 이길려면 어피치가 쏜 점수를 우선적으로 공략하여, 어피치가 점수를 못 얻도록 하는 것이 중요하다.
    // 그걸 어떻게 하냐
    
    // 남은 화살의 수에 따라 전략을 바꿔야한다.
    // 화살이 많이 남으면, 어피치가 쐈든 안쐈든 무조건 높은 점수에 때리고, 어피치가 쏜 점수에 쏘면 되지만,
    // 화살이 별로 없을 때는, 어피치가 쏜 곳을 우선적으로 잡아야된다.
    
    // 3발이 주어졌을 경우, 첫발은 무조건 높은 점수에 때리고, 나머지 2발을 한꺼번에 쏴야 어피치가 쏜 점수 중 1개를 쏜 점수를 가져갈 수 있다.
    // 이 점을 통해 남은 화살이 2개 있을 때는 무조건 한번에 2발을 때려야한다.
    
    
    
    
    // 실패 : 왜...?
    // 
    
    let arrowCount = n;
    let count = 0;
    let isPossibleToWin = false;
    
    for (let i = 0; i < info.length; i++){
        
        // 마지막 시도라면 남은것 모두 쏘기
        if (i === info.length - 1){
            answer.push(arrowCount);
        }
        // 만약 어피치가 쏜 화살의 갯수가 1개 이하라면 해볼만하다.
        else if (info[i] <= 1){
            // 만약 남은 화살의 개수가 2개라면 어피치가 못 쏜 곳에 쏘는 것은 의미없다.
            if (arrowCount === 2 && info[i] === 0){
                answer.push(0);         
            }
            // 화살이 충분한 경우와 남은 화살이 2개인 경우라도 어피치가 쏜 것에 쏘는 것이므로 쏴도 된다.
            else{
                // 어피치보다 1개라도 더 쏘면 그 것은 내 점수
                count = info[i] + 1;

                // 만약 지금 쏘려고 하는 화살의 갯수보다 남은 화살의 수가 많다면 (쏠 수 있어)
                if(arrowCount - count >= 0){
                    answer.push(count);
                    // 쏜 화살 갯수만큼 소진
                    arrowCount = arrowCount - count;
                }
                // 그렇지 않다면 (부족하다면 못 쏜다)
                else{
                    answer.push(0)
                }
            }
            
            count = 0;      
        }
        // 만약 어피치가 쏜 화살의 수가 2개 이상이라면, 화살만 아까울 뿐 손해다.
        else {
            answer.push(0);
        }
        

    }
    
    // 최종 점수 비교
    let apeach = 0;
    let lion = 0;
    let target = 10;
    
    for(let i in answer){
        if (info[i] < answer[i]){
            lion += target;
        }else if (info[i] + answer[i] !== 0 && info[i] >= answer[i]){
            apeach += target;
        }
        
        target--;
    }
    
    return apeach >= lion ? [-1] : answer;
}