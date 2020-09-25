const addTaskForm = document.querySelector('.add-task-form');
const formInputTextarea = document.querySelector('.add-task-form__input');
const addTaskButton = document.querySelector('add-task-form__button');
const notification = document.querySelector('.checkList-container__user-notification');
let taskListContainer = document.querySelector('.user-task-container__task-list');
let closeTask = document.getElementsByClassName('close-task-button ');
let userTasklist = document.querySelectorAll(".task-list__task, .checked");
let task;

// Create a close button, add it to the task list
for (task = 0; task < userTasklist.length; task++) {
    let span = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    span.className = "close-task-button ";
    span.appendChild(txt);
    userTasklist[task].appendChild(span);
}

// Click close button to hide the task
for (task = 0; task < closeTask.length; task++) {
    closeTask[task].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

//  Add "checked" after clicking on the added task
taskListContainer.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// // Restricting characters entered in the list
// function limit(element) {
//     let max_chars = 13;

//     if (element.value.length > max_chars) {
//         element.value = element.value.substr(0, max_chars);
//         notification.innerHTML = 'Maksymalna ilość znaków to 130!';
//     }
// }