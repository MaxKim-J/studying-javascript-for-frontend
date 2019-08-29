//todo javascript

//! 이벤트
//키보드 이벤트
// form에 입력했을때 자스에서 처리

// e는 이벤트에서 제공하는 기본 매개변수(이벤트 객체 핸들링 함수구나)
document.getElementsByName("testText")[0].onkeydown = function(e) {
  var eventcode = e.code;
  console.log(e.code);
  if (eventcode == "Digit1") {
    document.getElementById("test1").innerHTML = "<img src='static/image1.jpg'>";
  } else if (eventcode = "Digit2") {
    document.getElementById("test1").innerHTML = "<img src='static/image2.jpg'>";
  }
};

// 온키업 - 지정된 키를 입력했다 땟을 때
// 온키다운 - 입력되었을때 
document.getElementsByName("testText")[0].onkeyup = function(e) {
  if (e.code == "Backspace") {
    document.getElementById("test1").innerHTML = "";
  }
};

// 온마우스오버 - 온포커스/온마우스아웃 - 온블러
document.getElementsByClassName("btn")[0].onfocus = function(){
  document.getElementById("test2").innerHTML = "탭을 이용한 이벤트"
}; 

//! this

/*
this - 요소 자기 자신을 가리키는 키워드
*/

// 클래스 속성을 동적으로 바꿈
// css 애니메이션의 동적 효과
document.getElementById("wrap").onmouseover = function(){
  this.setAttribute("class", "over");
};

document.getElementById("wrap").onmouseout = function(){
  this.setAttribute("class", "");
};
