// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
// 한 유저가 다른 유저를 여러 번 신고할 수도 있지만, 신고 횟수는 1회로 처리
    // -> 신고한 사람 이름이 중복되지 않게 체크할 필요 O 
// id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 배열로 리턴

// reportedBy: 그 사람을 신고한 사람들, mailsReceived: 그 사람이 받을 메일 수
// report 를 순회하면서 신고된 유저별로 누가 신고했는지 확인한다.
    // 신고된 유저의 idx에 신고한 유저를 기록한다. (이미 같은 신고를 한 적이 없을 경우)
// 신고자 목록을 순회하면서 신고된 횟수(신고한 사람 수)가 k번 이상이면
    // 그 유저를 신고한 사람의 idx의 +1 

function solution(id_list, report, k) {    
    let reportedBy = new Array(id_list.length);
    for (let i = 0; i < id_list.length; i++) {
        reportedBy[i] = []
    }

    report.forEach(report => {
        let [reporter, reported] = report.split(' ');
        let reportedIdx = id_list.indexOf(reported);
        if (reportedBy[reportedIdx].indexOf(reporter) === -1) 
            reportedBy[reportedIdx].push(reporter);
    }) 
    
    let mailsReceived = new Array(id_list.length).fill(0);
    reportedBy.forEach(rec => {
        if (rec.length >= k) {
            rec.forEach(reporter => {
                const reporterIdx = id_list.indexOf(reporter);
                mailsReceived[reporterIdx]++;
            })
        }
    })

    return mailsReceived;
}
