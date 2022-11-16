function solution(genres, plays) {
    // 장르별 누적 재생 횟수를 저장할 객체
    const obj = {};
    
    // 객체에 장르별로 재생 횟수를 더해준다.
    for(let i = 0; i < genres.length; i++){
        let genre = genres[i];
        
        if(!obj[genre]){
            obj[genre] = 0;
        }
        
        obj[genre] += plays[i];
    }
    
    // 가장 많이 재생된 노래 두곡을 선정해야하므로 선정된 노래를 카운트하는 객체
    const dupObj = {};
    
    // 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 반환
    return genres
                .map((genre, idx) => ({genre: genre, count: plays[idx], index: idx}))
                .sort((a, b) => {
                    // 속한 노래가 많이 재생된 장르를 먼저 수록
                    if(a.genre !== b.genre) return obj[b.genre] - obj[a.genre];
                    // 장르 내에서 많이 재생된 노래를 먼저 수록
                    if(a.count !== b.count) return b.count - a.count;
                    // 장르 내에서 재생 횟수가 같다면 고유번호가 낮!은! 노래 먼저 수록
                    if(a.count === b.count) return a.index - b.index;
                })
                .filter(genre =>  {
                    // 이미 베스트 앨범에 장르가 두곡이 선정되었다면 false
                    if(dupObj[genre.genre] >= 2) {
                        return false;
                    }else{
                        if(!dupObj[genre.genre]){
                            dupObj[genre.genre] = 0;
                        }
                        
                        dupObj[genre.genre]++;
                        return true;
                    }
                })
                .map(genre => genre.index);
}