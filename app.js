const inputBox = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
let todoCount = document.querySelector("#todoCount");
let clearAll = document.querySelector("#clearBtn");

count = 0;
todoCount.innerHTML = count;
let editTodo = null;
const addtodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0) {
        alert("Write Something");
        return false;
    }
    if(addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    } else {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);
        todoCount.innerHTML = count + 1;
        count = count + 1;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        inputBox.value = "";
    }
}

const updatetodo = (e) => {
    if(e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        todoCount.innerHTML = count - 1;
        count = count - 1;
    }
    if(e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

todoList.addEventListener("click", updatetodo);

const cleartodo = () => {
    todoList.innerHTML = "";
    todoCount.innerHTML = 0;
    count = 0;
}