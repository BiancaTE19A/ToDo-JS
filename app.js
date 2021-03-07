let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodo);


function addTodo()
{
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-container"); //skapad för att kunna stylea text-decoration utan att påverka texten
    newTodo.classList.add('todo-object');
    todoDiv.appendChild(newTodo);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');

    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    
    todoInput.value = "";
}

function removeTodo(e)
    {
        const item = e.target;
    
        if (item.classList[0] === "delete-btn")
        {
            const todo = item.parentElement;
            todo.remove();
        }

        if (item.classList[0] === "todo-container")
         {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
         }
      
    }

