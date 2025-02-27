let taskInput=document.getElementById('INput');
document.getElementById('BUTton').addEventListener('click',eventListener)
document.getElementById('INput').addEventListener('keypress',eventListener)
window.onload = loadTasks;
let znum=0;

let display=document.createElement('p');
taskInput.parentElement.appendChild(display);

function eventListener(event){
    if (event.type==='click' || (event.type==='keypress' && event.key==='Enter')){
        addTask(taskInput.value);
        taskInput.value='';
        taskInput.focus()
    }
}

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
        
        if (newLi.classList.contains('done')) {
            znum--;
        } else {
            znum++;
        }
        newLi.classList.toggle('done');
        display.innerHTML= znum;
        saveTasks();
    })

    let newDelete = document.createElement('button');
    newDelete.classList.add('delete-btn');
    newDelete.addEventListener('click', function() {
        taskList.removeChild(newLi);
        saveTasks();
    });
    // document.appendChild(display);
    newLi.appendChild(newChecker);
    newLi.appendChild(document.createTextNode(taskText));
    newLi.appendChild(newDelete);
    taskList.appendChild(newLi);
    saveTasks();
}