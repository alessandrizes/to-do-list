const button = document.querySelector(".to-do-list_button");
const inputText = document.getElementById("taskInputText");
const container = document.querySelector(".container");
const timeline = document.querySelector(".timeline");
let dragging;// Variável criada para guardar a classe a ser movida
// O conceito do drag n' drop é pegar um elemento pela classe ou id guardar ela em uma variável e depois colocar esse elemento em outro lugar chamando essa variável

inputText.addEventListener("keypress", function (event) {
  if (event.charCode === 13) {
    add();
  }
})

button.addEventListener("click", add);

function add() {
  if (!inputText.value.trim()) {
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

  // Quebra de linha do texto inserido
  task.style.width = "80%";
  task.style.wordWrap = "break-word";

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

  // Adiciona o atributo que permite a movimentação
  newTask.setAttribute("draggable", true);

  //Seleciona o evento de click, define que o elemento pode ser arrastado (guarda a classe numa variável)
  newTask.addEventListener("dragstart", dragStart);

  //Seleciona a localização do evento de click e direciona para inserção depois do proximo elemento
  newTask.addEventListener('dragover', dragOver);

  // Finaliza o momvimento
  newTask.addEventListener("dragend", dragEnd);

  function dragStart(event) {
    dragging = event.target.closest(".to-do-list__new-task");
  }

  function dragOver(event) {
    const location = event.target.closest(".to-do-list__new-task");//
    console.log(dragging);
    this.parentNode.insertBefore(dragging, location);// this.parentNode equivale a class timeline
  }
  function dragEnd() {
    dragging = null;//usamos o dragging = null para dizer que deve parar o movimento
  }
};

const buttons = document.createElement("div");
const buttonCheck = document.createElement("button");
const buttonClear = document.createElement("button");

buttons.className = "buttons";
buttonCheck.className = "to-do-list_buttons";
buttonClear.className = "to-do-list_buttons";

buttonCheck.innerHTML = "check all";
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

