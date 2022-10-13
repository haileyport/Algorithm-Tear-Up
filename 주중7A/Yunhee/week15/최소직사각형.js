function solution(sizes) {
    // 가로, 세로 중에 더 길이가 큰 것을 가로로 바꾸기
    sizes = sizes.map(e => e.sort((a,b) => b - a));
    const width = sizes.map(e => e[0]);
    const heigth = sizes.map(e => e[1]);
    
    return Math.max(...width) * Math.max(...heigth);
}