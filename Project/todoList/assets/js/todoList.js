document.addEventListener("DOMContentLoaded", () => {
  const todoList = document.getElementById('todoList');
  const todoInput = document.getElementById('todoInput');
  const todoAddBtn = document.getElementById('btnAdd');
  const todoDeleteBtn = document.getElementById('btnDelete');


  // 할일 추가 
  const handleTodoAdd = () => {
    const todoInputVal = todoInput.value; // input의 value를 저장함
    const todoAddHtml = `
      <li class='todoListItem'>
        <input type='checkbox' id='todo-${todoInputVal}'>
        <label for='todo-${todoInputVal}'>${todoInputVal}</label>        
      </li>
    `; // li안에 input value 값을 저장함
    // console.log(todoAddHtml);

    todoList.innerHTML += todoAddHtml; // todoList 에 추가함
    todoInput.value = ""; // 값 초기화    
  }


  // 할일 삭제
  const handleTodoDelete = () => {
    const todoListItems = document.querySelectorAll('.todoListItem'); // 현재 생성된 리스트를 찾음
    todoListItems.forEach(target => {
      const valueChk = target.querySelector('input').checked;
      if (valueChk == true) target.remove(); // 리스트 안의 체크박스가 체크되어있으면 해당 li를 삭제한다.
    })
  }




  todoAddBtn.addEventListener('click', handleTodoAdd);
  todoDeleteBtn.addEventListener('click', handleTodoDelete);
})
