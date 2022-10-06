//크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return
// 뽑은 개수 - 남은 개수

function solution(board, moves) {

    let pickCount = 0;
    let bucket = [];

    while(moves.length > 0){
        for(let n of board){
            if(n[moves[0]-1] !== 0){
                bucket.push(n[moves[0]-1]);
                moves.shift();
                pickCount++;
                break;
            }
        }
    }
    console.log(bucket);
    if(moves.length === 0){
        return pickCount - bucket.length;
    }
    
}

let a = [[0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]]
let b = [1,5,3,5,1,2,1,4]
solution(a,b)

//moves의 숫자-1의 인덱스가 없으면 다음 배열 없으면 다음배열 하는식으로
//만약 바구니 맨 마지막 문자와 똑같으면 담기 취소 바구니 pop()
//moves가 빈 칸에 갈 수도 있으니까 인형 뽑은 숫자도 카운트한다
//카운트 - 바구니 갯수 출력
