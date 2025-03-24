// let time = 10
// undefined
// time
// 10
// setInterval(function () {
//     if(time >=0 ){
//     console.log(time) 
//     time = time -1
//     }
// },1000)

let time = 180;

setInterval(function () {
    if (time >= 0) {
        let min = Math.floor(time / 60);
        let second = String(time % 60).padStart(2,"0");
        console.log(min + ":" + second); 
        time = time - 1;
    }
}, 1000);
