function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const report_list = {} 
    
    
    id_list.map((user)=>{
        report_list[user] = [] 
    })
    console.log(report_list)
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){ 
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}