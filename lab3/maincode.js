function eventListener(event){
    let taskInput=document.getElementById('INput');
    if (event.type==='click') {
        addTask(taskInput.value);
        taskInput.value='';
        taskInput.focus()
    }else if(event.type==='keypress' && event.key==='Enter'){
        addTask(taskInput.value);
        taskInput.value='';
        taskInput.focus()
    }
}
document.getElementById('BUTton').addEventListener('click',eventListener)
document.getElementById('INput').addEventListener('keypress',eventListener)
function saveTasks(){
    let tasks=[];
    document.querySelectorAll('.list-item').forEach(item => {
        tasks.push({
            text: item.childNodes[1].nodeValue,
            done: item.querySelector('.check-box').checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTask(task.text);
        if (task.done) {
            document.querySelector('.list-item:last-child .check-box').checked = true;
            document.querySelector('.list-item:last-child').classList.add('done');
        }
    });
}
window.onload = loadTasks;

function addTask(taskText) {
    let taskList=document.querySelector('.unknown-list');
    if(!taskText.trim()){
        alert("Task can`t be empty");
        return;
    }
    if (!taskList) {
        taskList=document.createElement('ul');
        taskList.classList.add('unknown-list')
        document.body.appendChild(taskList);
    }
    let newLi=document.createElement('li');
    newLi.classList.add('list-item');
    let newChecker=document.createElement('input');
    newChecker.type='checkbox';
    newChecker.classList.add('check-box');
    newChecker.addEventListener('change',function () {
        newLi.classList.toggle('done');
        saveTasks();
    })
    let newDelete = document.createElement('button');
    newDelete.classList.add('delete-btn');
    newDelete.addEventListener('click', function() {
        taskList.removeChild(newLi);
        saveTasks();
    });

    newLi.appendChild(newChecker);
    newLi.appendChild(document.createTextNode(taskText));
    newLi.appendChild(newDelete);
    taskList.appendChild(newLi);
    saveTasks();
}