class Todo {
    constructor() {
        this.totaltask = document.querySelectorAll(".task").length;
    }

    addTask(taskText) {

        //copy tamplet
        let template = document.querySelector('.task').cloneNode(true);

        //remove class hide
        template.classList.remove('hide');


        let templateText = template.querySelector('.task-title');

        templateText.textContent = taskText;

        let taskList = document.querySelector('#task-container');


        taskList.appendChild(template);

        this.addEvents();

        this.checkList('add');

    }

    checkList(command) {

        let emptyTasks = document.querySelector('#empty-tasks')

        if (command === 'add') {
            this.totaltask += 1;
        } else if (command === 'delete') {
            this.totaltask -= 1;
        }

        if (this.totaltask === 1) {
            emptyTasks.classList.remove('hide');
        } else {
            emptyTasks.classList.add('hide');
        }

    }

    removeTask(task) {

        let list = task.parentElement;


        list.remove();

        this.checkList('delete');

    }

    doneTask(task) {

        task.classList.add('done')

    }

    addEvents() {

        let deleteBtns = document.querySelectorAll('#trashBtn');
        let removeBtn = deleteBtns[deleteBtns.length - 1];

        let doneBtns = document.querySelectorAll('#doneBtn');
        let doneBtn = doneBtns[doneBtns.length - 1];


        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        doneBtn.addEventListener('click', function() {
            todo.doneTask(this);
        });

    }

}

let todo = new Todo();

// button events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e) {

    e.preventDefault();

    let taskText = document.querySelector('#task');

    if (taskText.value != '') {
        todo.addTask(taskText.value);

        //clear text
        taskText.value = '';

    } else {
        alert('Insira o assunto da tarefa!')
    }

});