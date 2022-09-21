function solution(n, m) {
    //최대공약수 ->유클리드호제법
        
     
    let getGCD = (n, m) => m>0  ? getGCD(m, n % m) : n;
          //이제 최소공배수
    
            
        return [getGCD(n,m),n*m/getGCD(n,m)]
    }