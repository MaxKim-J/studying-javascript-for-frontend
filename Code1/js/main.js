//todo javascript

//! 자료형과 변수

/* 
var 변수명 = 값;
변수를 나타내는 이름, 등호를 통해 오른쪽에서 왼쪽으로 할당 
자스의 자료형은 5개 - string, number, bolean, undefined, null
*/

var x;
console.log(x);
//개발자 도구 콘솔 탭에 나타나는 값
x = 10;
console.log(x);
//할당하면 10이 나타남, 어떤 변수를 언제 어디서 선언하느냐에 따라 달라짐

var y = 10,
  z = 10;
console.log(y, z);
//두개 이상

console.log(typeof x);
// 콘솔창에 number나타남

var str = "문자형";
console.log(typeof str);
// 콘솔창에 string나타남

console.log(typeof true, typeof false);
// 콘솔창에  boolean 나타남

/* 
스코프 확인해보기; 선언했던 변수 또 선언하면?
변수값을 재할당하지 않았기 때문에 그대로 나옴 
*/

var x;
var y;
console.log(x, y); //10 10

//! 연산자

/*
뭐 알다시피 값을 연산하는데 쓴다
산술 연산자 : 증가(++), 감소(--;c언어와 같다), 나머지(%), 할당(+=, -=, *=, /=, %=)

증감:
후위연산(할당하고 값 증가): x++
전위연산(증가하고 값 할당): ++x 
*/

var x = 10;
var y;
y = x++;
//후위 연산
console.log(y); //10 할당 먼저
console.log(x); //11 증가는 다음

console.log(20 % 10); //0, 나누어 떨어짐
console.log(15 % 10); //5, 나머지

var z = 10;
z += 1; //z = z+1 알다시피, 단항연산 - 풀어쓰면 이항연산
console.log(z);

var x = 10,
  y = "10";
console.log(x == y); //값 비교, 같다라고 나오는데(true), 값만 비교함 타입은 확인 안해벌임
console.log(x === y); //엄격한 같음 확인(false), 값과 타입까지 - 파이썬과는 다른점인듯
console.log(x != y); // 역시 값비교해서 같지않음 확인
console.log(x !== y); // 엄격한 같지않음 확인

var z;
console.log((z = x == y ? 10 : 11));
console.log((z = x === y ? 10 : 11));
//z에 값을 할당할건데 조건이 필요하고, 참이면 10을, 거짓이면 11을 넣는다 ?의 역할

/*
묘한 산술연산- 문자열과 숫자를 결합할 경우 문자열 데이터 타입이 된다
파이썬에선 오류가 뜨겠지(안더해짐)
*/

var str3 = 1 + 1 + "귀요미";
// 숫자형 1+1더하고 2되면 2가 문자열로 바뀌고 귀요미랑 더해짐 - 2귀요미
/* 
그러게 그냥 변수선언하는건 파이썬이랑 다를바가 없다(var써야된다는거 빼고)
자료형을 유추함
*/
console.log(typeof str3, str3);

var str4 = "귀요미" + 1 + 1;
// 귀요미에다가 1 더하면 둘다 문자열로 바뀌고 다시 문자열 1이 더해짐 - 귀요미11
console.log(typeof str4, str4);

//! 제어문

/*
논리연산자 = !(not), &&(and), ||(or)

조건문 -- 

if(조건){
    조건 참이면 실행
} else if(조건) {
    조건 참이면 실행
} else{
    위 모든 조건이 거짓일 때 -- c언어랑 같음
}

if 같은 경우, elif처럼 무시되는 것이 없고 모든 조건을 다 따지게 함
elif같은 경우, 맞는 조건이 나오면 아래 elif 조건들은 무시됨

*/

var x = 10,
  y = "10",
  z = true;

if (x == 10) {
  console.log("x는 10입니당");
} else if (y == 10) {
  console.log("y도 10이군요"); //elif는 위에 맞는 조건이 있으면 아래는 무시됨
} else {
  console.log("모든 조건이 거짓이네요");
}

if (x == 10 && y == 10) {
  console.log("x는 10이고 y도 10임");
}

if (x == 10 && y === 10) {
  console.log("x는 10이고 y도 10임");
} else {
  console.log("y가 넘버 10이 아니므로 기각");
}

z = false; //var은 변수 최초선언에만 쓰인다
if (!z) {
  console.log("z는 거짓이군요");
}

/*
switch(값){
    case 조건: 실행문;break;
    case 조건: 실행문;break;
    case 조건: 실행문;break;
    default: 기본값;break;
}
*/

var x = 10;
var y;

switch (x) {
  case 5:
    console.log("5");
    break; //각각의 케이스마다 실행하고 종료
  case 10:
    console.log("10");
    break;
  default:
    console.log("15");
}

switch (y) {
  case 5:
    console.log("5");
    break;
  case 10:
    console.log("10");
    break;
  default:
    console.log(typeof y, "15");
}

//! 반복문

/*
알다시피 특정 코드 반복처리
자스에는 배열 개념이 있어버린다,,

배열: 여러 자료형을 하나로 묶는 자료형(객체)
var arr = [값, 값, 값, 값...]
*/

var arr = [1, 2, 3, 4, 5];
console.log(arr);

/*
 for(초기값;끝조건;행동){
    실행실행실행하셈!
}
*/

var len = arr.length;
//배열의 길이를 반환해주는 내장변수(c보다는 간편쓰,,,)
//변수값을 할당해놓은 상태라면, 계속 값을 찾는 게 아니라, 변수를 먼저 계산해두면 불필요한 연산 없음

for (var idx = 0; idx < len; ++idx) {
  console.log(arr[idx]);
}

/*
while(조건이 참일때까지){
    존나반복
}
*/

while(idx<len){
    console.log(arr[idx]);
    ++idx;  //이게 있어야 루프 다시돌아갈때 하나씩 올라감
}

while(idx<len){
    if(idx ==2){
        break;
    }
    console.log(arr[idx]);
    ++idx;
}