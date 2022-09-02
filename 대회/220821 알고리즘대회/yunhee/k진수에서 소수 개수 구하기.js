function solution(n, k) {
    var answer = 0;
    
    let str = n.toString(k);
    
    return str.split("0").filter(e => e !== "1" && e !== "").length;
}
