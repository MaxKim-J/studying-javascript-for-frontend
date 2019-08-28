//todo javascript

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

for(var idx = 0; idx < len; ++idx){
  // 여기서 idx는 로컬변수
  console.log(arr[idx]);
}

/*
while(조건이 참일때까지){
    존나반복
}
*/

var idx=0
while(idx < len){
    console.log(arr[idx]);
    ++idx;
}

var idx=0
while(idx < len){
    if(idx ==2){
        break;
    }
    console.log(arr[idx]);
    ++idx;
}

// 구구단 출력

var arr = [1,2,3,4,5,6,7,8,9];
var result = "";
var len = arr.length;

for(var i = 1; i <= len; ++i){
  for(var j=1; j<=9; ++j){
    result = i + "*" + j + "=" + i*j +"<br>"
    document.write(result);
  }
  result = "<br>";
  document.write(result);
}
