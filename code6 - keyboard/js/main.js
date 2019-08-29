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

//익명함수 (파이썬의 람다...와 비슷하지만 좀 다르다)
var multiply = function(x,y){
  return x*y;
}
test4.innerHTML = multiply(2,4);

// 링크로 함수 호출 - 오늘의 날짜
function getDate(){
  var result = "";
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;
  var day = new Date().getDate();
  result = year + "-" + month + "-" + day;
  document.getElementById("testhref").innerHTML = result;
}

//! 이벤트

/*
이벤트 : 웹페이지에서 발생하는 모든 사용자의 액션
이벤트 핸들러는 이벤트 이름앞에 on이 붙음
속성으로 등록, dom객체 탐색으로 등록, 메서드를 통해 등록
*/

// 버튼 클릭 이벤트
// 인덱스를 벗어날 경우엔 undefined가 나옴
var idx = 0;
function changeText(){
  var textArr = ["html", "css", "js", "python"];
  document.getElementById("testbutton").innerHTML = textArr[idx++];
  if(idx==textArr.length){
    idx = 0;  //인덱스 초기화
  }
}

document.getElementById("btn").onclick = function(){
  changeText();
}


// 마우스 이벤트
// onbclick, onmouseover, onmouseout

var colorArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
var p = document.getElementById("testcolor");

p.onmouseover = function(){
  var rand = Math.floor(Math.random() * colorArr.length);
  p.style.backgroundColor = colorArr[rand];
};

p.onmouseout = function(){
  p.style.backgroundColor = "black";
};

// 중복된 이벤트를, 똑같은 이벤트를 등록해야할 경우 addeventlistener
// 모든 브라우저에서 동작되지는 않음

document.getElementById("btn3").addEventListener("click", function(){
    alert("실행문1");
}, false);

document.getElementById("btn3").addEventListener("click", function(){
  alert("실행문2");
}, false);

// 마우스 클릭 이벤트 - 타이머(밀리세컨드)
var time = 0;
var isTime = false;
var timer = null;
var button = document.getElementById("starttimer");

function myTimer(){
  document.getElementById("timer").innerHTML = time++;
}

document.getElementById("starttimer").addEventListener("click", function(e){
  if(!isTime){
    isTime = true;
    timer = setInterval("myTimer(), 1000");
    button.innerHTML = "타이머 중지";
  }else{
    isTime = false;
    time = 0;
    clearInterval(timer);
    button.innerHTML = "타이머 시작"
  }
}, false)