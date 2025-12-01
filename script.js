// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign onclick event to remove button to remove the li element
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
    
    // Attach Event Listeners
    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);
    
    // Add event listener to input field for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});