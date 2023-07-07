let 안녕하세요 = 12;
console.log(12);

let value;

console.log(value);
// value라는 변수를 0으로 초기화 시킴

/*
javascript의 자료형 (data type)
- string == 문자열 -> 따옴표로 감싸야 함('' "")
- number == 숫자
- boolean == true false
- null == 빈 데이터
- undefined == 까먹고 초기화하지 않은 데이터

- Array (배열)
- Object (오브젝트)
*/
a = "안녕";
b = "소연님";
c = "예림님";
let str1 = `${a} 하세요, ${b}과 ${c}`;
// let str2 = `a 하세요, b과 c`;
let str3 = a + "하세요, " + b + "과 " + c;
console.log(str3);

let mathScore = "100"; //"100"
let engScore = "77"; //"77"

let avg = (Number(mathScore) + Number(engScore)) / 2;

console.log(avg);

// var 재선언 재할당 가능. 쓰지 마세요.
var name1 = "성춘향";

// 재선언은 안되지만 재할당은 됩니다.
// 선언시 초기화 하지 않아도 됩니다.
// 하지만 언젠가 데이터를 할당을 해주어야 합니다.
let name2 = "길동";

name2 = " 다른 data 를 넣을 수 있어요";

let name3;
name3 = "얍";

//const는 재선언이 안되고, 재할당도 안되고
// 초기화 작업도 반드시 선언할 때부터 되어야 합니다.
const name4 = "00";

// name4 = "rkrk"; // 재할당 안됨

console.log(name3 === "얍");

// if (name3 === "얍") {
//   alert("얍얍");
// }

// 함수
// 함수 선언문

square(8, 5); // 호출,사용
square(8, 7); // 호출,사용
square(8, 8); // 호출,사용
square(8, 100); // 호출,사용

function square(w, h) {
  console.log(w * h);
}

// 함수 표현식 -> 선언하고 나서 호출해야 함
const square2 = function (w, h) {
  console.log(w * h);
};
square2(8, 6);

// 함수 선언문
function sayHello(name) {
  console.log(`Hello, ${name}`);
}
// 함수 표현식
let sayHello1 = function (name) {
  console.log(`Hello, ${name}`);
};
// 화살표 함수
let sayHello2 = (name) => {
  console.log(`Hello, ${name}`);
};

sayHello("예림");
sayHello("소연");
sayHello("예림3");
sayHello("예림4");

function add(number1, number2) {
  return number1 + number2;
}
// add(4, 4)===8

let plus = add(5, 5) * 5;
console.log(plus);

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 7));
// -----------------------------------------
function square3(num3) {
  console.log(num3 ** 2);
}

square3(4);
square3(11);
square3(5);
