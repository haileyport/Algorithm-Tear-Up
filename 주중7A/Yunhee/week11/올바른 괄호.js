function solution(s){
    s = s.split("");
    let arr = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ")" && arr[arr.length-1] === "("){
            arr.pop();
            continue;
        }
        
        arr.push(s[i]);
    }
    
    return arr.length === 0 ? true : false;
}