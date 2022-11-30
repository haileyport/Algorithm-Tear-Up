function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}

function lcm(n, m) {
    return (n * m) / gcd(n, m);
}

function gcd(n, m){
    if(m === 0) return n;
    return n > m ? gcd(m, n % m) : gcd(n, m % n);
}