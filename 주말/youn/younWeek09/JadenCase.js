


function solution(s) {
    //케이스를 나눠보자
   //먼저 문자열을 공백으로 나눈다->그럼공백이 없는 문자열이 나올것
   //요소의 첫글자가 있을때는 대문자로 바꿔주고 없다면 숫자그대로나오게된다 나머지는 모두소문저
   //위에대로 다 바꾸고 나면 대문자나 숫자앞에 공백을 추가해준뒤 연결해준다?
       //근데 연속으로 나올수있다잖음->이건안되겠다
       //우선해보고..
   let str1 = s.split("")
   
     let result = ''
     console.log(str1)
        
   for(let i =0; i < str1.length; i++){
     if(i=== 0){
       result += str1[0].toUpperCase()
     }else if(str1[i-1]===" " && str1[i] !== " "){
         result += str1[i].toUpperCase()
        }else{
         result+= str1[i].toLowerCase()
       }
     }
   return result
   }
   