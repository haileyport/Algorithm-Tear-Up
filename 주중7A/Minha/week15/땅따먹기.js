function solution(land) {
  for (let i = 0; i < land.length - 1; i++) {
    land[i + 1][0] += Math.max(land[i][1], land[i][2], land[i][3])
    land[i + 1][1] += Math.max(land[i][0], land[i][2], land[i][3])
    land[i + 1][2] += Math.max(land[i][0], land[i][1], land[i][3])
    land[i + 1][3] += Math.max(land[i][0], land[i][1], land[i][2])
  }
  return Math.max(...land[land.length - 1])
}