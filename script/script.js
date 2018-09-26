const button = document.querySelector(".to-do-list_button");
const inputText = document.getElementById("taskInputText");
const timeline = document.querySelector(".to-do-list__timeline");
const container = document.querySelector(".container");

button.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputText.value === null || inputText.value === undefined || inputText.length === 0 || !inputText.value.trim()) {
        inputText.focus();
        return false;
    }

    const newTask = document.createElement("div");
    newTask.className = "to-do-list__new-task";

    const task = document.createElement("p");
    task.className = "to-do-list__new-task_name";
    task.innerHTML = inputText.value;

    const remove = document.createElement("div");
    remove.className = "to-do-list__new-task_remove";
    remove.innerHTML = `<button class="to-do-list__new-task_remove-button">x</button>`

    newTask.appendChild(task);
    newTask.appendChild(remove);
    timeline.appendChild(newTask);

    inputText.value = "";

    task.addEventListener("click", function (event) {
        event.preventDefault();
        if (this.classList.contains("to-do-list__new-task_name")) {
            this.classList.remove("to-do-list__new-task_name");
            this.classList.add("to-do-list__new-task_hidden");
        } else {
            this.classList.remove("to-do-list__new-task_hidden");
            this.classList.add("to-do-list__new-task_name");
        }
    })

    remove.addEventListener("click", function (event) {
        event.preventDefault();
        newTask.remove();
    })
})

const buttons = document.createElement("div");
buttons.className = "buttons";

const buttonCheck = document.createElement("button");
buttonCheck.className = "to-do-list_buttons";
buttonCheck.innerHTML = "check all";

const buttonClear = document.createElement("button");
buttonClear.className = "to-do-list_buttons";
buttonClear.innerHTML = "clear all";

buttons.appendChild(buttonCheck);
buttons.appendChild(buttonClear);

container.insertBefore(buttons, container.childNodes[container.length]);

buttonCheck.addEventListener("click", function(){
    const tasks = document.querySelector("p");
    if (tasks.classList.contains("to-do-list__new-task_name")) {
        tasks.classList.remove("to-do-list__new-task_name");
        tasks.classList.add("to-do-list__new-task_hidden");
    } else {
        tasks.classList.remove("to-do-list__new-task_hidden");
        tasks.classList.add("to-do-list__new-task_name");
    }
})

// buttonClear.addEventListener("click", function(){
    
// })