const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser"
const SHOWING_CN = "showing"
const FORM_CN = "form"

// queryselecter - 모든 엘레멘트 다 가져9와서 array로 만듬 (인덱싱 필요)

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    // submit시 새로고침 막기
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
// local storage - 유저 브라우저에 저장
// 쿼리를 쓸수 있음 localstorage.setItem/getItem
// based on url  유알엘 단위로 작동

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser); //키값
    }
}

function init() {
    loadName();
}

init();