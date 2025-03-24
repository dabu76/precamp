let isStarted = false;

const send = ()=>{
    if(isStarted === false){
        //타이머가 작동중이 아닐때
        isStarted =true
        document.getElementById("complete").disabled=false
        let auth = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("target").innerText = auth;
        document.getElementById("target").style.color ="#" +auth;
        let time = 10;
        let timer
     timer = setInterval(function () {
            
            if(time >=0) {
                
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2,"0");
                
                document.getElementById("number").innerText = min + ":" + sec;
                
                time--
            }else{
            document.getElementById("complete").disabled = true;
            isStarted= false
            clearInterval(timer)
            }
        },1000)
    } else{
        //타이머가 작동중일때
        
    }
}