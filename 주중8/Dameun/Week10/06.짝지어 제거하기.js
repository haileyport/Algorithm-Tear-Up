function solution(s){
    if(s === ""){
        return 1;
    }else if(s.length%2 !== 0){
        console.log(s);
        return 0;
    }
    let arrayS = s.split('');
    let arrSRe = arraySlice(arrayS);

    if(s === arrSRe.join('')){
        return 0;
    }else{
        return solution(arrSRe.join(''))
    }
}

function arraySlice(arr){
    for(let n = arr.length/2; n>0; n--){ㅎ
        console.log(n);
        if(arr[n] === arr[n-1]){
            arr.splice(arr.length-n,2);         
        }
    }
    return arr;
}


//실패
//스택이라는 것을 사용하여 푸는 것이다! 
//새로운 방법을 이용한다고 하면 그냥 검색해보는 것이 더 효율적일지도 🤔