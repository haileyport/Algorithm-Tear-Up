function solution(id_list, report, k) {
    let user = {}
    
    const set = new Set(report);

    const uniqueReport = [...set];
    
    for(let i = 0; i < uniqueReport.length; i ++){
        let splituser = uniqueReport[i].split(' ')
        if(!user[splituser[1]]){
             user[splituser[1]] = 1
        } else {
                user[splituser[1]]++
        }

    }
    
    let  filteruser  = id_list.filter(el=> {if (user[el] >= k) {
      return el
    }})
    let message = {}
    for ( x = 0 ; x<id_list.length; x++){
        message[id_list[x]] = 0
    }
   for(let j = 0; j < uniqueReport.length; j++){
       let splituser2 = uniqueReport[j].split(' ')
      for(let l=0; l<filteruser.length; l++){
           if(splituser2[1] === filteruser[l]){
              message[splituser2[0]] ++
           }
      }
      
   }
    
    var answer = id_list.map(el=> message[el]);
    return answer;
}
// //채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0