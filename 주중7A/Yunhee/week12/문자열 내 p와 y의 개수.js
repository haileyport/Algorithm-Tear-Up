function solution(s){
    // 문자열에 p와 y의 개수를 비교해 같으면 true 다르면 false 리턴, 둘 다 없다면 true
    s = s.toLowerCase().split("");
    
    return s.filter(e => e === "p").length === s.filter(e => e === "y").length;
}