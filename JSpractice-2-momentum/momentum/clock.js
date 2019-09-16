const clockContainer = document.querySelector(".js-clock");
// 클락 클래스의 자식
const clockTitle = clockContainer.querySelector("h1");

// setinterval (function, 시간간격)

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  // ternary operator - mini if
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  //current Time
  getTime();
  //매초마다 시간 가져옴 - 초 표현
  setInterval(getTime, 1000);
}

init(); //이닛은 기본!
