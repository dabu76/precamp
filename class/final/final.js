let isStarted = false;

const changePhone=()=>{
    const phone = document.getElementById("phone1").value;
    if(phone.length === 3){
        document.getElementById("phone2").focus()
    }
}
const changePhone2=()=>{
    const phone2 = document.getElementById("phone2").value;
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}
const auth__send = () => {
    if (!isStarted) {
        isStarted = true;
        let auth = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("signup__Auth").innerText = auth;

        let time = 10;
        let timer = setInterval(function () {
            if (time >= 0) {
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("signup__Time").innerText = min + ":" + sec;
                time--;
            } else {
                document.getElementById("auth__Button2").disabled = false;
                clearInterval(timer);
                isStarted = false;
                console.log("타이머 종료, isStarted 초기화됨");
                document.getElementById("complete").disabled = false; // 버튼 활성화
            }
        }, 1000);
    }
};
    let sign = true;
const check = ()=>{
    console.log("dd?")
   const mail = document.getElementById("signup__Email").value;
   const name = document.getElementById("signup__Name").value;
   const pw1 = document.getElementById("signup__Pw1").value;
   const pw2 = document.getElementById("signup__Pw2").value;
   const city = document.getElementById("signup__City").value;
   const man = document.getElementById("man").checked;
   const woman = document.getElementById("woman").checked;
   if(mail.includes("@") ===false){
    document.getElementById("error__Email").innerText="이메일을 입력하세요";
    sign = false;
   }if(name === ""){
    document.getElementById("error__Name").innerText="이름을 입력하세요"
    sign = false;
   }if(pw1 ===""){
    document.getElementById("error__Pw1").innerText="비밀번호를 입력하세요"
    sign = false;
   }if(pw2 ===""){
    document.getElementById("error__Pw2").innerText="비밀번호를 입력하세요"
    sign = false;
   }if(city ==="지역을 선택하세요"){
    document.getElementById("error__City").innerText="지역을 선택하세요"
    sign = false;
   }if(!man &&!woman){
    document.getElementById("error__Gender").innerText="성별을 선택해주세요"
    sign = false;
   }if(pw1 !== pw2){
    document.getElementById("error__Pw2").innerText="비밀번호가 다릅니다"
    sign = false;
   }else{
    
   }if(sign===true){
    alert("코드캠프 가입을 축하드립니다!");
   }
}