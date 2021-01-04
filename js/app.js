const formInputTextarea = document.querySelector('.add-task-form__input');
const addTaskButton = document.querySelector('.add-task-form__button');
const notification = document.querySelector('.main-container__user-notification');
let message = 'Pole puste! Proszę wpisać nowe zadanie!';
const closeTask = document.getElementsByClassName('close-task-button');
const taskListContainer = document.querySelector('.user-task-container__task-list');
const userTasklist = document.getElementsByTagName('li');

// Create a close button
const closeTaskButton = function () {
    let i;
    for (i = 0; i < userTasklist.length; i++) {
        const buttonX = document.createElement('button');
        const buttonXtext = document.createTextNode('\u00D7');
        buttonX.className = 'close-task-button';
        buttonX.appendChild(buttonXtext);
        userTasklist[i].appendChild(buttonX);
    }
}; closeTaskButton();

// Click close button to hide the task
const clickToCloseTask = function () {
    for (task = 0; task < closeTask.length; task++) {
        closeTask[task].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}; clickToCloseTask();

// Add new task
const addTask = function () {
    let inputValue = formInputTextarea.value;
    let createInput = document.createTextNode(inputValue);
    let newLiTask = document.createElement('li');
    newLiTask.className = 'task-list__task';
    newLiTask.appendChild(createInput);

    if (inputValue === '') {
        notification.innerHTML = message;
    } else {
        // Create and add a close button to new task
        let buttonXforNewLi = document.createElement('button');
        let buttonXtextForNewLi = document.createTextNode('\u00D7');
        buttonXforNewLi.className = 'close-task-button';
        buttonXforNewLi.appendChild(buttonXtextForNewLi);
        taskListContainer.appendChild(newLiTask);
        newLiTask.appendChild(buttonXforNewLi);
        notification.innerHTML = '';
    }
    formInputTextarea.value = '';
    clickToCloseTask();

}; addTaskButton.onclick = addTask;

//  Add class "checked" after click on the added task
taskListContainer.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Enter key add new task to list
formInputTextarea.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTaskButton.click();
    } else if(formInputTextarea.value === '') {
        notification.innerHTML = message;
    } else {
        notification.innerHTML = '';
    }
});