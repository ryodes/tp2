function creerTodoList(text) {
    const todoDiv = document.createElement('div');
    const todoFieldset = document.createElement('fieldset');
    const todoLegend = document.createElement('legend');
    const todoA = document.createElement('a');
    const todoBt = document.createElement('button');
    todoDiv.className = 'todo';
    todoDiv.appendChild(todoFieldset);
    todoFieldset.appendChild(todoLegend);
    todoFieldset.appendChild(todoBt);
    todoFieldset.appendChild(todoA);
    todoLegend.textContent = 'Todo';
    todoA.href = '#';
    todoA.className = '';
    todoA.textContent = text;
    todoBt.textContent = 'Delete';
    todoBt.className = 'delete';
    todoBt.onclick = deleteTodo;
    directory.appendChild(todoDiv);
}

function deleteTodo() {
    directory.removeChild(this.parentElement.parentElement);
}