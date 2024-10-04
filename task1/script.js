document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('clearAll').addEventListener('click', clearAllTasks);
document.getElementById('showAll').addEventListener('click', showAllTasks);
document.getElementById('showCompleted').addEventListener('click', showCompletedTasks);
document.getElementById('showPending').addEventListener('click', showPendingTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✓';
        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✕';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(completeBtn);
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function clearAllTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

function showAllTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        task.style.display = 'flex';
    });
}

function showCompletedTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
    });
}

function showPendingTasks() {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
    });
}
