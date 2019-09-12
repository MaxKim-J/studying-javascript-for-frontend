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
