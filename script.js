// Select elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Add li to the list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
}

// Event listener for Add button
addButton.addEventListener('click', addTask);

// Allow Enter key to add task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
