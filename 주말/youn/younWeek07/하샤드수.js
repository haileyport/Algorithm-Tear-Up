function solution(x) {
   
    let sp = String(x).split("")// [1, 3]
    let result =0
    for(let i = 0; i< sp.length; i++){
        result = result + Number(sp[i])
    }
   //result = 4
    let hx = false
    if(x % result === 0){
       hx =true
    }
      
    
    return hx
}