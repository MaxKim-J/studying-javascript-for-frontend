const body = document.querySelector("body");
const IMG_NUMBER = 3;


function handleImgLoad() {
    console.log("im loaded");
}

//html
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}


//난수 발생 함수
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();