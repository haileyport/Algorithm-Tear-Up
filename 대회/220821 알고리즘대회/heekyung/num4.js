function solution(n, info) {
    var answer = [];
    let appch = {}
    let lion = {}
    for(i = 10; i>0; i--){
        appch[i] = info[info.length-i-1]
    }
    for(k = 10; k>0; k--){
       lion[k] = 0
    }

    let count = 0
    for( j = 0; j < n ; j++){
        if(appch[10-count] > lion[10-count]){
           lion[10-count]++
           } else {
                count++
           }
       
        
    }
        
    return  lion;
}
//완전틀림