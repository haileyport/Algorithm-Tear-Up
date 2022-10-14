function solution(sizes) {
    const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
    const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
    return maxWidth * maxHeight;
}
