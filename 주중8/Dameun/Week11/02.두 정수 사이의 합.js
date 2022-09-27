function solution(a, b) {
    if(a >=b ){
        return (((a+1)*a)/2) - ((b * (b-1))/2)
    }else{
        return (((b+1)*b)/2) - ((a * (a-1))/2)
    }
}

//2점
