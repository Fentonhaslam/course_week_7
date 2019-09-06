document.getElementById('create').onclick = function () {
    // To-do list ul element
    const todoList = document.querySelector('ul');
    // Create new to-do
    const newTodo = document.createElement('li');
    let list_id = 5
    newTodo.setAttribute('id', `list-item-${list_id}`)

    var textarea = document.getElementById('newTodo');
    var text = textarea.value;
    var newButton = document.createElement('button');
    console.log(newButton);
    newButton.onclick = editTextGenerator(list_id);
    newTodo.textContent = text;
    newButton.innerHTML = 'Edit: ' + text;
    todoList.appendChild(newTodo);
    todoList.appendChild(newButton);
    textarea.value = '';
}

document.getElementById('priority').onclick = function () {
    const todoList = document.querySelector('ul');
    const anotherTodo = document.createElement('li');
    var textarea = document.getElementById('newTodo');
    var text = textarea.value;
    anotherTodo.textContent = text;
    todoList.insertBefore(anotherTodo, todoList.firstElementChild);
    textarea.value = '';
}

const editText = function (text) {
    const newTextArea = document.createElement('textarea');
    console.log(newTextArea)
    var text = newTextArea.value;
    newTextArea.remove();
    return text
}


function editTextGenerator(list_id) {

    return function () {
        const newTextArea = document.createElement('textarea');
        const currentListItem = document.getElementById(`list-item-${list_id}`)
        currentListItem.appendChild(newTextArea)
    }

}