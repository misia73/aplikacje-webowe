import TodoEntry from "./TodoEntry.js";

const addButton: HTMLButtonElement | null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement | null = document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todosContainer")!;


let arrayOfTodos: TodoEntry[] = [];

if (addButton && inputTextField && todosContainer) {
    addButton.addEventListener('click', () => {
        const titleValue = inputTextField.value.trim() || "Bez tytułu";

        let newTodo: TodoEntry = new TodoEntry(arrayOfTodos.length,inputTextField.value);

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