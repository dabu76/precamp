const fruits = [
    {number:1,title:"레드향"},
    {number:2,title:"샤인머스켓"},
    {number:3,title:"산청딸기"},
    {number:4,title:"한라봉"},
    {number:5,title:"사과"},
    {number:6,title:"애플망고"},
    {number:7,title:"딸기"},
    {number:8,title:"천혜향"},
    {number:9,title:"과일선물세트"},
    {number:10,title:"귤"}
    
]
undefined
fruits
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '산청딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '애플망고'}6: {number: 7, title: '딸기'}7: {number: 8, title: '천혜향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10[[Prototype]]: Array(0)
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i].number + " "+fruits[i].title)
    
}
// VM1586:2 1 레드향
// VM1586:2 2 샤인머스켓
// VM1586:2 3 산청딸기
// VM1586:2 4 한라봉
// VM1586:2 5 사과
// VM1586:2 6 애플망고
// VM1586:2 7 딸기
// VM1586:2 8 천혜향
// VM1586:2 9 과일선물세트
// VM1586:2 10 귤

for(let i = 0; i<fruits.length; i++){
    console.log(`${fruits[i].number} 등은 ${fruits[i].title}`)
    
}
// VM1717:2 1 등은 레드향
// VM1717:2 2 등은 샤인머스켓
// VM1717:2 3 등은 산청딸기
// VM1717:2 4 등은 한라봉
// VM1717:2 5 등은 사과
// VM1717:2 6 등은 애플망고
// VM1717:2 7 등은 딸기
// VM1717:2 8 등은 천혜향
// VM1717:2 9 등은 과일선물세트
// VM1717:2 10 등은 귤
// undefined
