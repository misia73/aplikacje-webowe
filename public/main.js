import TodoEntry from "./TodoEntry.js";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todosContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton.addEventListener('click', () => {
        const titleValue = inputTextField.value.trim() || "Bez tytułu";
        let newTodo = new TodoEntry(arrayOfTodos.length, inputTextField.value);
        arrayOfTodos.push(newTodo);
        inputTextField.value = '';
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        todosContainer.innerHTML += element.render();
    });
}
