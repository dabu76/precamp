const checkValidation = function(){
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    if (email&&pw1&&pw2){
        //모든 input가 비어있지않을때
        document.getElementById("submit").disabled= false
    }else {
        //하나라도 비어있을때
        document.getElementById("submit").disabled= true

    }
}