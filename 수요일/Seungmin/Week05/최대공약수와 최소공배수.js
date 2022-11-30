function solution(n, m) {
    var answer = [];
    
    const gcf = (a,b) => {
        if ( b === 0) {
            return a
        }
        return gcf(b, a % b)
    }
    const lcm = (a,b) => (a*b) / gcf(a,b)
    
    return [gcf(n,m), lcm(n,m)];
}