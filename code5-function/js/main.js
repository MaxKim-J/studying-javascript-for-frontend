//todo javascript

//! 함수
/*
코드의 논리를 하나로 묶는당

function 함수명(매개변수){
  실행코드
  return 반환값(있을수도 있고 없을수도)
}
*/

//? 어째 by id는 elements로 못가져옴
var test1 = document.getElementsByClassName("test")[0];
var test2 = document.getElementsByClassName("test")[1];
var test3 = document.getElementsByClassName("test")[2];
var test4 = document.getElementsByClassName("test")[3];

// 함수의 리턴값을 html태그 내용 안에 넣기
function multiply(x, y){
    return x * y; 
}
test1.innerHTML = multiply(2, 2);

// 인터벌 1초 
var x = 0; //? 전역변수
function interval(){
  test2.innerHTML = ++x;
}
window.setInterval("interval()", 1000)

// 변수 스코프 
function myFunc(){
  var x = 0;  //? 로컬변수 
  test3.innerHTML = x;
}
myFunc();

// test.innerHTML = x; 함수 밖에서 변수를 부르면 로컬변수라 안불러짐

//익명함수 (파이썬의 람다)
var multiply = function(x,y){
  return x*y;
}
test4.innerHTML = multiply(2,4);