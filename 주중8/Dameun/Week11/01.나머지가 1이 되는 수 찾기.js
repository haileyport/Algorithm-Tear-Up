function solution(n) {
    for(let i = 2; i<n; i++ ){
        if((n-1)%i === 0){
            return i
        }
    }
}

//2점 
