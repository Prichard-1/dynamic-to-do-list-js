// Wait until the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";

        // Apply the 'remove-btn' class using classList.add
        removeBtn.classList.add('remove-btn');

        // Add event to remove the task from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Add button to the list item, and list item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for clicking the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

