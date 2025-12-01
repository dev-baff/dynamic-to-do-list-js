// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function() {
    
    // Select DOM Elements
    // Select the "Add Task" button and store in a constant named addButton
    const addButton = document.getElementById("add-task-btn");
    
    // Select the input field and store in a constant named taskInput
    const taskInput = document.getElementById("task-input");
    
    // Select the unordered list and store in a constant named taskList
    const taskList = document.getElementById("task-list");
    
    // Load tasks from Local Storage when page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
    
    // Create the addTask Function
    function addTask(taskText, save = true) {
        // If taskText is not provided (called from button/enter), get it from input
        if (typeof taskText === "boolean") {
            save = taskText;
            taskText = taskInput.value.trim();
        } else if (taskText === undefined) {
            taskText = taskInput.value.trim();
        }
        
        // Check if taskText is not empty
        if (taskText === "") {
            // Use alert to prompt the user to enter a task
            alert("Please enter a task.");
            return;
        }
        
        // Task Creation and Removal
        // Create a new li element
        const li = document.createElement("li");
        
        // Create a text node and set it to taskText
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);
        
        // Create a new button element for removing the task
        const removeButton = document.createElement("button");
        
        // Set its textContent to "Remove"
        removeButton.textContent = "Remove";
        
        // Give it a class name of 'remove-btn'
        removeButton.classList.add("remove-btn");
        
        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // Remove the li element from taskList
            taskList.removeChild(li);
            
            // Remove task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            const taskIndex = storedTasks.indexOf(taskText);
            if (taskIndex > -1) {
                storedTasks.splice(taskIndex, 1);
            }
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);
        
        // Clear the task input field
        taskInput.value = "";
        
        // Save to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }
    }
    
    // Load tasks from Local Storage on page load
    loadTasks();
    
    // Attach Event Listeners
    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener("click", addTask);
    
    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener("keypress", function(event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === "Enter") {
            addTask();
        }
    });
    
});