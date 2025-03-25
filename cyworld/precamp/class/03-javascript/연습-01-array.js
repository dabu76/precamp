let classmate = ["철수","영희","훈이"]
// undefined/
classmates
// (3)['철수','영희','훈이']
classmate[0]
// '철수'
classmate[1]
//'영희'
classmate[2]
//'훈이'
classmate.includes("훈이")
// true
classmate.includes("맹구")
//false
classmate.length
//3
classmate.push("맹구")
//4
classmate.includes("맹구")
//true
classmate
//  classmates(4)[]['철수','영희','훈이','맹구']
classmate.length
//4
classmate.pop()
// '맹구'
classmate.length
//3
classmate
// (3)['철수','영희','훈이']
let developer = ['워라벨','연봉','신분상승','커리어점프','게쩌는 개발자의 명성']
//undefined
developer[2]
//'신분상승'
let dream = ['커리어 점프','성공','할수있다']
//undefined
developer
//(5)['워라벨','연봉','신분상승','커리어점프','게쩌는 개발자의 명성']
dream
//['커리어 점프','성공','할수있다']
developer.concat(dream)
//(8)['워라벨','연봉','신분상승','커리어점프','게쩌는 개발자의 명성''커리어 점프','성공','할수있다']
let result = developer.concat(dream)
//undefined
result
//(8)['워라벨','연봉','신분상승','커리어점프','게쩌는 개발자의 명성''커리어 점프','성공','할수있다']

