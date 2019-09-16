const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
// 로컬 스토리지에서 사용할 배열
const toDos = [];

// 로컬 스토리지에 저장시킴
function saveToDos() {
    // JSON - 오브젝트를 문자열로 바꿔줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 투두가 써진 html element를 만듬
function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제하기";
    
    const span = document.createElement("span")
    span.innerText = text

    const newId = toDos.length + 1
    
    // 부모에 넣기(li안에 span과 delBTN을 넣는다)
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    // 구성한 element를 html에 어느 부분에 넣을것인지 정하기 + 넣기
    toDoList.appendChild(li);

    const toDoObj = {
        // 로컬 스토리지때문에 객체로 저장
        // 로컬 스토리지에는 온리 문자열만 - JSON
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

// 서브밋 처리 - 입력값 문자열을 페인트 투두로 넘김
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value
    paintTodo(currentValue);

    // 이거 뭐져?
    toDoInput.value = "";
}

function something(toDo) {
    console.log(toDo);
    // 객체에서 text 속성 가져옴
    paintTodo(toDo.text);
}

// 투두들을 로드함, 로컬 스토리지에 저장한 스트링 투두들을
// 다시 객체로 가져와서 포맷팅 가능한 형식으로 가져옴
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // json 자바스크립트 단 위의 데이터 형변환
        // string(로컬스토리지)-> object(다시 포맷팅 가능하게)
        const parsedToDos = JSON.parse(loadedToDos);
        // array의 요소 하나씩 function을 실행 (map)
        parsedToDos.forEach(something);
    } 
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);

};

init();