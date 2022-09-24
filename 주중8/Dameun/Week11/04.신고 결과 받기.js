//다른 사람 풀이 보기 


function solution(id_list, report, k) {
    //중복값 제거
    let newReport = new Set(report)
    let reportArr = []
    for(let n of newReport){
        reportArr.push(n.split(' '))
    }
    //신고받은 횟수 
    let userBedPoint = new Array(id_list.length).fill(0) 
    for(let n of reportArr){
        let userNum = id_list.indexOf(n[1])
        userBedPoint[userNum] += 1
    }
    //정지 유저 리스트
    let bedUserList = []
    for(let n=0; n<userBedPoint.length; n++){
        if(userBedPoint[n] >= k){
            bedUserList.push(id_list[n])
        }
    }
    //메일을 받을 사람
    let mailUserList = []
    let result = new Array(id_list.length).fill(0) 
    for(let n of reportArr){
        if(bedUserList.indexOf(n[1]) !== -1){
            mailUserList.push(n[0])
        }
    }
    for(let n of mailUserList){
        let userNum = id_list.indexOf(n)
        result[userNum] += 1
    }
    return result;
}

//4점
// 테스트 1 〉	통과 (0.11ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.6MB)
// 테스트 3 〉	통과 (858.35ms, 110MB)
// 테스트 4 〉	통과 (0.31ms, 33.5MB)
// 테스트 5 〉	통과 (0.27ms, 33.6MB)
// 테스트 6 〉	통과 (1.63ms, 34.2MB)
// 테스트 7 〉	통과 (2.69ms, 34.7MB)
// 테스트 8 〉	통과 (3.23ms, 35.2MB)
// 테스트 9 〉	통과 (239.82ms, 67MB)
// 테스트 10 〉	통과 (143.60ms, 67.3MB)
// 테스트 11 〉	통과 (566.97ms, 109MB)
// 테스트 12 〉	통과 (0.69ms, 33.6MB)
// 테스트 13 〉	통과 (0.56ms, 33.6MB)
// 테스트 14 〉	통과 (288.27ms, 67.2MB)
// 테스트 15 〉	통과 (214.52ms, 75.2MB)
// 테스트 16 〉	통과 (0.47ms, 33.6MB)
// 테스트 17 〉	통과 (0.54ms, 33.7MB)
// 테스트 18 〉	통과 (1.40ms, 33.8MB)
// 테스트 19 〉	통과 (1.49ms, 34.1MB)
// 테스트 20 〉	통과 (268.83ms, 66.7MB)
// 테스트 21 〉	통과 (432.92ms, 77.7MB)
// 테스트 22 〉	통과 (0.10ms, 33.6MB)
// 테스트 23 〉	통과 (0.11ms, 33.5MB)
// 테스트 24 〉	통과 (0.10ms, 33.5MB)