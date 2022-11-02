function solution(id_list, report, k) {
    // k번 이상 신고된 유저는 게시판 이용 정지, 해당 유저를 신고한 모든 유저에게 정지 사실 알림
    
    // 동일한 유저에 대한 신고는 1회로 처리
    report = new Set(report);
    
    // 신고된 유저의 횟수를 확인한다.
    let reportedUser = {};
    
    for(let users of report){
        let user = users.split(" ")[1]; 
        
        if(!(user in reportedUser)){
            reportedUser[user] = 0;
        }
        
        reportedUser[user]++;
    }
    
    // k번 이상 신고당한 유저를 찾는다.
    let reported = [];
    
    for(let user in reportedUser){
        if(reportedUser[user] >= k){
            reported.push(user);
        }
    }
    
    // 신고당한 유저를 신고한 유저를 찾는다.
    let result = {};
    
    for(let users of report){
        let reportUser = users.split(" ")[0];
        let reportedUser = users.split(" ")[1];
        
        if(reported.includes(reportedUser)){
            if(!(reportUser in result)){
                result[reportUser] = 0;
            }
            result[reportUser]++;
        }
    }
    
    let answer = [];
    
    for(let i = 0; i < id_list.length; i++){
        if(id_list[i] in result){
            answer.push(result[id_list[i]]);
        }else{
            answer.push(0);
        }
    }
    
    return answer;
}