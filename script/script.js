const button = document.querySelector(".to-do-list_button");
const inputText = document.getElementById("taskInputText");
const container = document.querySelector(".container");
const timeline = document.querySelector(".timeline");

inputText.addEventListener("keypress", function (event) {
  if (event.charCode === 13) {
    add();
  }
})


button.addEventListener("click", add);

function add() {

  if (inputText.value === null || inputText.value === undefined || inputText.length === 0 || !inputText.value.trim()) {
    inputText.focus();
    return false;
  }

  const newTask = document.createElement("div");
  newTask.className = "to-do-list__new-task";

  const task = document.createElement("p");
  task.style.width = "80%";
  task.style.wordWrap = "break-word";
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

  remove.addEventListener("click", function () {
    newTask.remove();
  })


};

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

buttonCheck.addEventListener("click", function () {
  const tasks = document.querySelectorAll("p");
  this.classList.toggle("activo");

  if (this.classList.contains("activo")) {
    this.innerHTML = "uncheck all";
    for (let i = 0; i < tasks.length; i++) {

      if (tasks[i].classList.contains("to-do-list__new-task_name")) {
        tasks[i].classList.remove("to-do-list__new-task_name");
        tasks[i].classList.add("to-do-list__new-task_hidden");
      }
    }
  } else {
    this.innerHTML = "check all"
    for (let i = 0; i < tasks.length; i++) {

      if (tasks[i].classList.contains("to-do-list__new-task_hidden")) {
        tasks[i].classList.remove("to-do-list__new-task_hidden");
        tasks[i].classList.add("to-do-list__new-task_name");
      }
    }
  }
})

buttonClear.addEventListener("click", function () {
  const toDoListNewTask = document.querySelectorAll(".to-do-list__new-task");
  for (let i = 0; i < toDoListNewTask.length; i++) {
    toDoListNewTask[i].remove();
  }
})


