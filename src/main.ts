const addButton: HTMLButtonElement | null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement | null = document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todosContainer")!;

type TodoStatus = "todo" | "doing" | "done";

type Todo = {
    id: number,
    title: string,
    description?: string,
    status: TodoStatus,
    isDone?: boolean
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer) {
    addButton.addEventListener('click', () => {
        const titleValue = inputTextField.value.trim() || "Bez tytułu";

        let newTodo: Todo = {
            id: Date.now(),
            title: titleValue,
            status: "todo"
        };

        arrayOfTodos.push(newTodo);
        inputTextField.value = '';
        buildList();
    });
}

function buildList() {
    todosContainer.innerHTML = "";

    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card-body", "mt-1", "shadow");

        let container2 = document.createElement("div");
        container2.classList.add("card");

        let title = document.createElement('h3');
        title.textContent = "Tytuł: " + element.title;


        let statusLabel = document.createElement('label');
        statusLabel.textContent = "Zmień status: ";
        statusLabel.classList.add("fw-bold", "d-block", "mt-2");

        let cardStatusSelect = document.createElement('select');
       cardStatusSelect.classList.add("form-select", "mb-2");

        const statuses: TodoStatus[] = ["todo", "doing", "done"];
        statuses.forEach(st => {
            const option = document.createElement("option");
            option.value = st;
            option.textContent = st.toUpperCase();
            if (st === element.status) {
                option.selected = true;
            }
            cardStatusSelect.appendChild(option);
        });


        let statusInfo = document.createElement('small');
        statusInfo.classList.add("text-muted", "d-block", "mb-3");
        statusInfo.textContent = "Aktualny status: " + element.status.toUpperCase();


        cardStatusSelect.addEventListener('change', (e) => {
            const target = e.target as HTMLSelectElement;
            element.status = target.value as TodoStatus;


            statusInfo.textContent = "Aktualny status: " + element.status.toUpperCase();
        });

        let id = document.createElement('p');
        id.classList.add("small");
        id.textContent = "ID: " + element.id;

        let deleteB = document.createElement("button");
        deleteB.textContent = "Delete";
        deleteB.classList.add("btn-danger", "btn", "w-100", "p-3");

   //https://mimo.org/tutorials/typescript/how-to-remove-element-from-array-in-typescript
        deleteB.addEventListener('click', () => {
            const index = arrayOfTodos.findIndex(todo => todo.id === element.id);
            if (index !== -1) {
                arrayOfTodos.splice(index, 1);
            }
            buildList();
        });

        container.appendChild(title);
        container.appendChild(statusLabel);
        container.appendChild(cardStatusSelect);
        container.appendChild(statusInfo);
        container.appendChild(id);
        container.appendChild(deleteB);
        container2.appendChild(container);

        todosContainer.appendChild(container2);
    });
}