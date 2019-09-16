// 변수
// create -> initialize -> use
// 기본은 const, 필요할때만 let -> 리소스 아끼기
// 자스 변수는 camel case, start with lower to upper
// object key값은 변수 , 도트연산자로 접근가능 
// console log can have infinite arguments

//자바스크립트 백틱 `` 포맷팅에 쓰인다

function sayHello(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

//요 상수에 들어가는게 함수의 리턴값
// function 안에 리턴이 있어야 상수 안에 들어가버린다

const maxInfo = sayHello("max", 24);
console.log(maxInfo);

// 객체 안에 함수 넣기(클래스 메소드 같은)
// 어떤 의미에선 파이썬보다 직관적일거같기도
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    subs: function (a, b) {
        return a - b;
    },
}

const plusValue = calculator.plus(3, 6);
console.log(plusValue);

// DOM - Document Object Model
// console.log(document); document 전체를 토해낸다, 이것 자체를 객체로 가짐

const title = document.querySelector("#title");
// 쿼리 셀렉터는 css의 선택자와 똑같다 . 클래스/ # 아이디
console.log(title); // title dom 객체를 반환한다

title.innerHTML = "Hi, From JS";

// 자바스크립트 dom 객체의 스타일 값역시 카멜로 쓰임

// 도큐먼트 값 변수의 타이틀 바꾸기
document.title = "jspractice2"

// intercepting events
// window. -> click, resize, printing.. 등등의 window event들도 객체로 가져온다

function handleResize(event) {
    console.log("I have been resized")
    // event 인자 - 이벤트리스너가 듣는 이벤트
    console.log(event);
}



// 자스에선 함수를 참조할때 ()를 쓰지 않는다, ()는 호출할때만
// 이런 상황에서 호출하게되면 바로 처 나온다 그러므로 쓰지 말것
window.addEventListener("resize", handleResize)
title.addEventListener("click", handleClick)

// 조건 분기 style 바꾸기

// const BASE_COLOR = "blue"
// const OTHER_COLOR = "red"

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// };

// class 바꾸기 분기 => classlist를 쓰자 
// contains, add, remove, toggle

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
};
init();





