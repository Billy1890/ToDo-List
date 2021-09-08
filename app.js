var newTaskInput = document.getElementById("new_task_input");
var taskform = document.getElementById("new_task_form");
var tasksList = document.getElementById("tasksList");
var deleteBtn = document.querySelectorAll(".task_delete_btn");

taskform.addEventListener("submit", function (s) {
    s.preventDefault();
    var newtaskInputValue = taskform.elements.new_task_input;
    addTask(newtaskInputValue.value);
});

function addTask(newTask) {
    const newTaskItem = document.createElement("li");
    newTaskItem.setAttribute("class", "task_item");

    const newDeleteBtn = document.createElement("div");
    newDeleteBtn.setAttribute("class", "task_delete_btn");

    const newTaskTxt = document.createElement("span");
    newTaskTxt.setAttribute("class", "task_text");
    newTaskTxt.innerText = newTask;

    tasksList.appendChild(newTaskItem);

    newTaskItem.appendChild(newDeleteBtn);


    newTaskItem.appendChild(newTaskTxt);


    onTaskComplete(newDeleteBtn);
}

(async function fetchTodoList() {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos?_limit=10");
    const data = await response.json();
    data.forEach(d => {
        const newTaskItem = document.createElement("li");
        newTaskItem.setAttribute("class", "task_item");

        const newDeleteBtn = document.createElement("div");
        newDeleteBtn.setAttribute("class", "task_delete_btn");

        const newTaskTxt = document.createElement("span");
        newTaskTxt.setAttribute("class", "task_text");
        newTaskTxt.innerText = d["title"];
        tasksList.appendChild(newTaskItem);
        newTaskItem.appendChild(newDeleteBtn);
        newTaskItem.appendChild(newTaskTxt);
        onTaskComplete(newDeleteBtn);
    })
})();


function onTaskComplete(btns) {
    btns.addEventListener("click", function (s) {
        var parent = s.target.parentElement;
        parent.remove();

    });
}