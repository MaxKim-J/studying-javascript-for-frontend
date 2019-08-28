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

//set
cat.gender = 'male';
cat.age = 10;

//배열도 하나의 객체(파이썬에서는 리스트 클래스)
var arr =[1,2,3,4,5]
console.log(arr.length)

// math객체 - 수학관련 내장객체
var pi = Math.PI;
console.log(pi);
console.log(Math.pow(2,4)) // 제곱
console.log(Math.random()); // 0<=x<=1 사이의 난수

//! 객체활용

/*
자바스크립트가 제공하는 기본 내장 객체
날짜객체(파이썬의 datetime)
1970 1 1 utc 이후의 밀리세컨즈 기반으로 생성
1970 1 1 기준으로 시간 수식 계산
*/

//datestring
var date = new Date("1970-01-02");
console.log(24*60*60*1000);
console.log(date.getTime());

//문자열 객체
var str1 = "한국외국어대학교";
var str2 = "영미문학,문화학과";
console.log(str1.length);   
//문자열도 길이를 가진다(파이썬에서처럼)

//인덱싱
console.log(str1.charAt(0)) 
console.log(str1.charAt(5)) 
console.log(str1.charAt(4)) 

// split(구분자)
console.log(str2.split(','));

// indexof(해당 문자 인덱싱)
// 값이 없을 경우 -1을 반환
console.log(str2.indexOf('문'));

//과제, datestring 활용하기
var now = new Date();
var count = new Date("2019-12-31");
var gap = now.getTime() - count.getTime()
console.log(gap)
gap = Math.floor(gap/(1000*3600*24))
console.log(gap)

var result="";

if (gap > 0){
  result += gap
} else if(gap == 0){
  result = "day"
} else{
  result += (-gap)
}

document.write("d-day를 기준으로 D-" + result + "입니다.");