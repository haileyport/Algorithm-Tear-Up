function solution(genres, plays) {
    var answer = [];
    let generesHash = {}
    let genreSumArr = []
    let result = []

    for (let i = 0; i < genres.length; i++) {

        answer.push({
            id: i,
            generes: genres[i],
            plays: plays[i]
        })

        generesHash[genres[i]] = generesHash[genres[i]] === undefined ? plays[i] : generesHash[genres[i]] + plays[i]
    }


    for (const genre in generesHash) genreSumArr.push([genre, generesHash[genre]])
    genreSumArr.sort((a, b) => b[1] - a[1])

    for (const genre of genreSumArr) {
        const sorted = answer.filter(song => song.generes === genre[0]).sort((a, b) => b.plays - a.plays)
        for (let i = 0; i < 2 && i < sorted.length; i++) result.push(sorted[i].id)
    }
    return result;

}
