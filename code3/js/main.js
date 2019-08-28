//todo javascript

//! 객체

/*
오브젝트 - 객체 이름
프로퍼티 - 고유한 특징
메서드 - 고유한 행동

자스의 오브젝트 - 파이썬의 클래스
var 객체명 = {키:값, 키:값}
키는 객체의 속성(프로퍼티)

객체.메서드();  메서드 실행
객체.프로퍼티;  겟
객체.프로퍼티=값;   속성을 변경-셋
*/

var cat={gender:'female', age:5};

//get
console.log(typeof cat);
console.log(cat.age);
console.log(cat.gender);

//ser
cat.gender = 'male';
cat.age = 10;

//배열도 하나의 객체(파이썬에서는 리스트 클래스)
var arr =[1,2,3,4,5]
console.log(arr.length)

// math객체 - 수학관련 내장객체
var pi = Math.PI;
console.log(pi);
console.log(Math.pow(2,4))
