const startWord= ()=>{
    let myWord = document.getElementById("myWord").value
    let word = document.getElementById("word").innerText
    
   let lastWord =  word[word.length-1]

   let firstWord = myWord[0]
   if(firstWord === lastWord){
    //정답
        document.getElementById("result").innerText="정답입니다!"
        document.getElementById("word").innerText=myWord
        document.getElementById("myWord").value=""
   }else{
        document.getElementById("result").innerText="땡!"
        document.getElementById("myWord").value=""
    //오답
   }

}