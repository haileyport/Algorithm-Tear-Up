// 노래 목록을 순회하며 각 장르별로 재생된 횟수를 구한다.
// 장르 목록을 많이 재생된 순으로 나열한다.
// 각 장르에 속한 노래들을 많이 재생된 순으로 나열한다.
    // 노래와 고유번호(인덱스) 번호를 같이 나열해야 한다.
// 노래들의 고유번호를 위에서 정렬한 노래 순서대로 반환한다.

function solution(genres, plays) { 
    let answer = [];

    // 장르별 재생횟수 세기
    let genresCount = {};
    plays.forEach((count, idx) => {
        const genre = genres[idx];
        genresCount[genre] ? genresCount[genre] += count : genresCount[genre] = count;
    })

    // 재생횟수가 많은 순으로 장르 나열(배열로 바꿔서)
    let genresSorted = [];
    for (const el in genresCount) {
        genresSorted.push([el, genresCount[el]]);
    }
    genresSorted.sort((a, b) => {
        return b[1] - a[1];
    });
    
    // 많이 재생된 장르 순으로 장르별로 가장 많이 재생된 노래 2개 정답에 추가 
    for (const genreInfo of genresSorted) {
        const genre = genreInfo[0]
        const genreSongs = [];
        plays.forEach((count, idx) => {
            if (genres[idx] === genre) genreSongs.push([count, idx])
        })
        genreSongs.sort((a, b) => {
            if (a[0] !== b[0]) return b[0] - a[0];
            else return a[1] - b[1];
        })
        const onTrack = genreSongs.slice(0,2).map(el => el[1])
        answer.push(...onTrack);
    }
    
    return answer;
}
