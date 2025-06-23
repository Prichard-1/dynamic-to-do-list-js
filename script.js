// Wait until the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task input value and trim any whitespace
        const taskText = taskInput.value.trim();

        // Alert the user if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";

        // Set the class using className (as required)
        removeBtn.className = 'remove-btn';

        // When clicked, remove the task from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the list item, and the item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Listen for clicks on the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow user to press Enter to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

