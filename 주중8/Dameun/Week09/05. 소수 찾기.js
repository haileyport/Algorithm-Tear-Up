function solution(n) {
    let result = Array.from({length:n+1}, () => true).fill(false, 0, 2);
    for(let i = 2; i*i <= n; i++){
        if(result[i]){
            for(let j = i*i; j<=n; j+= i){
                result[j] =  false;
            }
        }
    }
    return result.filter(el => el === true).length;
}

let output = solution(5);
console.log(output);

//11점 
