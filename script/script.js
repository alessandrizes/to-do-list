const button = document.querySelector(".to-do-list_button");
const inputText = document.getElementById("taskInputText");
const container = document.querySelector(".container");

button.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputText.value == null || inputText.value == undefined || inputText.value == "" || inputText.value == " ") {
        inputText.focus();
        return false;
    }

    const div = document.createElement("div");
    div.className = "to-do-list__new-task";

    const task = document.createElement("p");
    task.className = "to-do-list__new-task_name";

    task.innerHTML = inputText.value;
    div.appendChild(task);

    // console.log(container.childNodes);
    container.insertBefore(div, container.childNodes[4]);
})