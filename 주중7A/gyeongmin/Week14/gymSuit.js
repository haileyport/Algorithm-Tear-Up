function solution(n, lost, reserve) {
    //n: 전체학생의 수
    //lost: 체육복을 도난당한 학생들의 번호가 담긴 배열
    //reserve: 여벌의 체육복을 가져온 학생들읩 번호가 담긴 배열
    //[20202]
    //[10201]
    //[210]
    let arr = Array(n).fill(1)
    //console.log(arr) //[1,1,1,1,1]
    for(let i = 0; i < arr.length; i++){
        //여벌옷이 있는 학생은 +1해주고
        arr[reserve[i]-1] += 1;
        //도난당한 학생은 -1 해주기
        arr[lost[i]-1] -= 1;
    }
    //console.log(arr) //[ 2, 0, 2, 0, 2, NaN: 2 ] 
    //앞에 학생과 뒤에학생의 차이가 2라면 여벌옷이 있는경우이므로 빌려주고 둘다 1로 바꿔주기
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i]-arr[i-1]) === 2){
            arr[i] = 1
            arr[i-1] = 1
        }
    }
    //체육복이 없는 학생번호만 걸러주기
    arr = arr.filter(el=>!(el === 0))
    //return 체육수업을 들을 수 있는 학생의 최댓값
    return arr.length;
}
