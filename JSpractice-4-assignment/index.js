// 	practiceOne.innerText = `지정한 숫자만큼 아날로그 초침이 시계 방향으로 설정된 다음
//         시작 버튼을 누르면 1초마다 시계 반대 방향으로 움직여서 
//         결국 12시 방향을 가르키며 종료되는 아날로그 타이머`;

// 	practiceTwo.innerText = `지정한 숫자만큼 타이머가 표시되고 
//         시작 버튼을 누르면 1초씩 줄어들고 
//         0초에서 정지하는 디지털 타이머`;

const app = document.querySelector("#app");
const dgtClock = document.querySelector(".dgt-clock");
const timer = document.querySelector(".timer");
const anlgClock = document.querySelector(".anlg-clock");

let timerTime = 0;

//플러스 버튼 구현
function handlePlusBtn() {
    timerBoard = document.querySelector("h1")
    img = document.querySelector("img")

    if (timerTime < 60) {
        timerTime++;
        img.style.transform = `rotate(${timerTime*6}deg)`
    }
    timerBoard.innerText = `${timerTime < 10 ? `0${timerTime}` : timerTime}`;
};

//마이너스 버튼 구현
function handleMinusBtn() {
    if (timerTime > 0) {
        timerTime--;
        img.style.transform = `rotate(${timerTime*6}deg)`
    } 
    timerBoard.innerText = `${timerTime < 10 ? `0${timerTime}` : timerTime}`;
};

// 시작 버튼 구현
// 버튼 디스에이블드
function handleStartBtn() {
    const btns = document.querySelector(".timer > div")
    
    btns.classList.remove("enable");
    btns.classList.add("disable")
    let anlgTimer = setInterval(function () { 
        if(timerTime > 0){
            timerTime--;
            img.style.transform = `rotate(${timerTime*6}deg)`
        } else {
            btns.classList.remove("disable");
            btns.classList.add("enable");
            clearInterval(anlgTimer); 
        }
        timerBoard.innerText = `${timerTime < 10 ? `0${timerTime}` : timerTime}`;
    }, 1000);
};

// html 컴포넌트 구현
function timerMake() {
    const timerDiv = document.createElement("div"); 
    const anlgDiv = document.createElement("div")
    const dgtDiv = document.createElement("div");

    timer.appendChild(timerDiv);
    dgtClock.appendChild(dgtDiv);

    //디지털 타이머
    const timerBoard = document.createElement("h1")
    dgtDiv.appendChild(timerBoard);
    
    timerBoard.innerText = "00";

    //아날로그 타이머
    const secondHand = document.createElement("img")
    secondHand.src = "http://images.webskills.kr/etc/s.png"
    secondHand.classList.add ="secondhand"

    anlgClock.appendChild(anlgDiv);
    anlgDiv.appendChild(secondHand)

    //타이머 버튼
    const plusBtn = document.createElement("button")
    const minusBtn = document.createElement("button")
    const startBtn= document.createElement("button")
   
    timerDiv.appendChild(plusBtn);
    timerDiv.appendChild(minusBtn);
    timerDiv.appendChild(startBtn);
    
    startBtn.innerText = "시작!";
    plusBtn.innerText = "플러스!";
    minusBtn.innerText = "마이나쓰!";

    // 버튼 이벤트 감지
    plusBtn.addEventListener("click", handlePlusBtn)
    minusBtn.addEventListener("click", handleMinusBtn)
    startBtn.addEventListener("click", handleStartBtn)
};

function init() {
    timerMake();
};

init();