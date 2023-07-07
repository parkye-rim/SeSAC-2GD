// if문
/* if(조건){
    조건이 true일때 실행할 문장을 쓰면 됌
} */

let a = 10;
if (a === 10) {
  console.log("a는 10입니다.");
}

if (a > 10) {
  console.log("a가 10보다 큽니다.");
} else {
  console.log("a는 10이거나, 10보다 작습니다.");
}

let score = 70;
/* 
90<= <=100 : console.log('A')
80<= <90 : console.log('B')
70<= <80 : console.log('C')
60<= <70 : console.log('D')
60 미만  : console.log('F')
*/

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let age = 17;
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("유아");
}

let value = Number(prompt("숫자를 입력해주세요."));
switch (value) {
  case 1:
  case 3:
    console.log("a는 홀수입니다.");
    break;
  case 2:
  case 4:
    console.log("a는 짝수입니다.");
    break;
  //   case 3:
  //     console.log("a는 홀수입니다.");
  //     break;
  //   case 4:
  //     console.log("a는 짝수입니다.");
  //     break;
  default:
    console.log("검사할 수 있는 범위가 아닙니다.");
    break;
}

let number = 8;
if (number % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}

number % 2 === 0 ? console.log("짝수입니다.") : console.log("홀수입니다.");

let now = new Date().getHours();
console.log(now);
now < 12 ? console.log("오전입니다.") : console.log("오후입니다.");
