/**
 * x
 * 
 * 
 */

/**
 * 한 번에 한 명 신고 가능
 * k번 이상 신고되면 정지 => 모든 유저에게 메일 발송
 * 신고한 당사자는 정지되는 놈마다 처리 결과 메일을 받게 됨.
 * 같은 유저가 여러 번 신고해도 1회 처리
 */

/**
 * 
 * @param {*} id_list 이용자 ID
 * @param {*} report 내가 신고한 이용자
 * @param {*} k 정지 기준
 * @returns 각 유저별로 처리 결과 메일을 받은 횟수
 */
 function solution(id_list, report, k) {   
    // 신고자 및 신고한 사람 객체
    // 값을 배열 형태로 해서, 추가하고 이미 있으면 추가 안하기
    let accuseList = {};
    id_list.map((id) => {return accuseList[id] = [];});
    
    let count = {};
    id_list.map((id) => {return count[id] = 0;});
    
    // 신고자 : [신고당한 사람]     
     for(let i=0; i<report.length; i++){
        let [user, accuse] = report[i].split(" ");
        // 중복 제거
        if(!accuseList[user].includes(accuse)){
            accuseList[user].push(accuse);
            // 여기서 신고 얼마나 받았나 볼까
            count[accuse] ++;
        }
    }
    
    let person = '';
    
    // count에서 k보다 많이 나온 애 나오라 해!
    // if (count.["muzi"]>k){
    //     // 무지 가진 애들 인덱스에 +1
    // } // 이걸 반복문으로 하고 싶은데
    
    return count;
}