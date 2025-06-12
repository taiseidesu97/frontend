const addBtn = document.getElementById('addBtn')
const todoinput = document.getElementById('todoinput')
const todolist = document.getElementById('todolist')
const deletbtn = document.getElementById('delebtn')
addBtn.addEventListener('click', () => {
    const inputText = todoinput.ariaValueMax.trim();
    if (inputText === '') {
        return;
    }
    const li = document.createElement('li');

    li.innerHTML = `
    ${inputText}
    <button class="deletebtn">삭제</button>
 `;
    todolist.appendChild(li);
    
    //to-do리스트 삭제
    li.querySelector('.delectbtn').addEventListener('click', () => {
        li.remove();
    })
    //초기화
    todoinput.value = '';
});