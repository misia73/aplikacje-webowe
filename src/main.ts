const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if(addButton && inputTextField && todosContainer){
    addButton?.addEventListener('click', (e) => {
     let wynik = inputTextField?.value;
     let newTodo: Todo = {id: arrayOfTodos.length, title: inputTextField.value};
     arrayOfTodos.push(newTodo);
     buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card", "card-body", "mt-1");
        let title = document.createElement("h1");
        let id = document.createElement("p");

        title.textContent = "Tytul: " + element.title;
        id.textContent = "ID: " + element.id;

        container.appendChild(title);
        container.appendChild(id);

        todosContainer?.appendChild(container);
    })
}