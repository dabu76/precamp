let isStarted = false;//버튼을 눌렀을때 시간이 여러번 가는것을 방지하기 위한 boolean

const changePhone=()=>{//oninput 을 통해 phone1의 길이가 3이면 다음 포커스로 옮김김
    const phone = document.getElementById("phone1").value;
    if(phone.length === 3){
        document.getElementById("phone2").focus()
    }
}
const changePhone2=()=>{//위와 같고 3으로 옮김김
    const phone2 = document.getElementById("phone2").value;
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }
}
const auth__send = () => {//위에서 적은 started가 false라면 트루로 바꾸고
    if (!isStarted) {
        isStarted = true;
        let auth = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");//랜덤한 6자리 숫자의 인증번호를 만들고 만약 첫번째숫자가 0이라면 문자열로 0을 추가함함
        document.getElementById("signup__Auth").innerText = auth;//auth의 숫자를 이너텍스트로 넣어줌줌

        let time = 180;
        let timer = setInterval(function () {//시간을 설정하고 
            if (time >= 0) {
                let min = Math.floor(time / 60);//시간을 설정한 초에서 60(분단위를 구하기위해)나눠주고 floor을 통해 소수점을 버려준다
                let sec = String(time % 60).padStart(2, "0"); // %를 통해 나머지 값을 구하고 앞자리가 0이되어 없어지는것을 방지하기 위해 padstart를 넣어줌
                document.getElementById("signup__Time").innerText = min + ":" + sec;// 그값을 이너텍스트로 넣어줌줌
                time--;
            } else {
                document.getElementById("auth__Button2").disabled = false; //시간이 다지나면 버튼을 활성화하고
                clearInterval(timer);//타이머를 초기화
                isStarted = false;//다시 실행할수 있게 false로 바꿈꿈
                document.getElementById("complete").disabled = false; // 맨아래 컴플리트 버튼 활성화
            }
        }, 1000);
    }
};
    let sign = true;
const check = ()=>{
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