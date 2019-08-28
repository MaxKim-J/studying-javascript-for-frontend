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
var len=tagName.length;
for(var i = 0; i<len; ++i){
  tagName[i].innerHTML = "자스로 바꿨음3";
}

// document query로 접근하기, 자식 선택자로 접근
document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "자스로 바꾼 h1";

