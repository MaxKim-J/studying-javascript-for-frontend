// javascript

/* var 변수명 = 값;
변수를 나타내는 이름, 등호를 통해 오른쪽에서 왼쪽으로 할당 
*/

/* 
자스의 자료형은 5개 - string, number, bolean, undefined, null
*/

var x;
console.log(x); //개발자 도구 콘솔 탭에 나타나는 값
x = 10;
console.log(x); //할당하면 10이 나타남, 어떤 변수를 언제 어디서 선언하느냐에 따라 달라짐

var y=10, z=10;
console.log(y,z); //두개 이상

// string, number, boolean

console.log(typeof x); // 콘솔창에 number나타남

var str = "문자형이다 임마";
console.log(typeof str); // 콘솔창에 string나타남

console.log(typeof true, typeof false); // 콘솔창에  boolean 나타남

// 스코프 확인해보기; 선언했던 변수 또 선언하면?

var x; 
var y;
console.log(x,y)