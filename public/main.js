"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton?.addEventListener('click', (e) => {
        let wynik = inputTextField?.value;
        let newTodo = { id: arrayOfTodos.length, title: inputTextField.value };
        arrayOfTodos.push(newTodo);
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        let title = document.createElement("h1");
        let id = document.createElement("p");
        title.textContent = "Tytul: " + element.title;
        id.textContent = "ID: " + element.id;
        container.appendChild(title);
        container.appendChild(id);
        todosContainer?.appendChild(container);
    });
}
