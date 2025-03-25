     const send =()=>{
    let num = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    document.getElementById("target").innerText = num;
    document.getElementById("target").style.color = "#" + num;

    }
  