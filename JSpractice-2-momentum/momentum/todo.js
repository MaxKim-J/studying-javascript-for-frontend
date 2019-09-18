const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
// 로컬 스토리지에서 사용할 배열
let toDos = [];


// 로컬 스토리지에 저장시킴
function saveToDos() {
    // JSON - 오브젝트를 문자열로 바꿔줌
    // 삭제할 투두들은 로컬 스토리지에서 지우는 과정은 그냥 새로고침(?)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//화면에서 투두들 지우기 + 로컬 스토리지에서 삭제하기
function deleteToDos() {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    // 배열의 아이템 중 참인것들만 뱉는다
    // 리턴에 조건을 지정해줄수 있는거임? 신기하누,,
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });

    // 필터함수: for each처럼 각각의 아이템들과 함수를 실행시킴 도트로 이어진 배열등과
    toDos = cleanToDos;
    saveToDos();
}


// 투두가 써진 html element를 만듬
function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    
    const span = document.createElement("span")
    span.innerText = text

    delBtn.addEventListener("click", deleteToDos);

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