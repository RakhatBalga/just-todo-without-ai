const input = document.querySelector('.todo-input');
const btnAdd = document.querySelector('.todo-add-btn');
const todoList = document.querySelector('.todo-list');

btnAdd.addEventListener('click', () => {
    const taskText = input.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'list-item';

    const span = document.createElement('span');
    span.className = 'item';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';


    deleteBtn.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(deleteBtn);
    li.appendChild(span);
    todoList.appendChild(li);

    input.value = '';
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        btnAdd.click();
    }
});