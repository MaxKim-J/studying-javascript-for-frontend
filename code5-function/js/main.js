//todo javascript

//! DOM 객체

/*
웹페이지 하나를 객체로 본다(ㅎㄷㄷ)
html태그를 파싱해서 가져온다
html태그의 엘리멘트를 조작
*/

//id로 가져와서 + innerHTML - 태그 안 값 바꾸기
document.getElementById("heading").innerHTML = "제목태그라능~";

//class로 가져오기
// 클래스 이름이 여러번 쓰였을 때는 배열인덱싱처럼 대괄호로 순서를 지정해줘야함
// 인자 메소드 안에 s가 붙어있는 것들은 인덱싱 필요하다고 생각하면 됨
document.getElementsByClassName("paragraph")[0].innerHTML = "자스로 바꿨음";

// for문을 사용해 p태그 인덱싱해서 죄다 바꾸기
var tagName = document.getElementsByTagName("p");
var len = tagName.length;
for (var i = 0; i < len; ++i) {
  tagName[i].innerHTML = "자스로 바꿨음3";
}

// document query로 접근하기, 자식 선택자로 접근
document.querySelectorAll("div#container > h1#heading")[0].innerHTML =
  "자스로 바꾼 h1";

//! BOM객체

/*
웹 브라우저 자체를 객체로 인식
WINDOW객체를 가지고, 하위객체로 스크린, 로케이션 네브 등등등
하위 웹페이지 구성요소를 표현하는 내장 객체들을 포함
*/

// 도큐먼트는 윈도우 객체의 하위 객체
var test = window.document.getElementById("test");
// (팝업)브라우저 열기, 특정 유알엘
// window.open("https://google.com");
// 해당 html 파일은 안열기
// window.close();

//사용자에게 응답 요구, 상단 클릭 모달
var trueOrfalse = window.confirm("true or false");
// 내장객체 메소드를 통해 confirm을 통해 사용자 응답에따라 태그 바꿈
test.innerHTML = trueOrfalse;
// 브라우저의 크기 가져오는 내장객체
test.innerHTML =
  "width: " + window.innerWidth + " height: " + window.innerHeight;

// 알림창 띄우기
window.alert("경고창경고창");

// 타이머를 만드는 함수
var x = 0;
window.setInterval("interval()", 1000);
function interval() {
  test.innerHTML = ++x;
}

//팝업
var popup = window.open("", "popup", "width = 400, height = 500");
popup.document.write("<h1>안녕 난 팝업이야!</h1>")