const input = document.querySelector('.todo-input');
const btnAdd = document.querySelector('.todo-add-btn');
const todoList = document.querySelector('.todo-list');

btnAdd.addEventListener('click', () => {
    const taskText = input.value;

    if (taskText === '') return;

    const li = document.createElement('li')
    li.textContent = taskText

    todoList.appendChild(li)
    input.value = ''
})