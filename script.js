// Wait for the full HTML document to be loaded before executing any code
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim to remove leading/trailing spaces

        // Alert if the input field is empty
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
        removeBtn.className = 'remove-btn';

        // Set the remove button to delete the task when clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item and the item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Enable adding a task by pressing the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Automatically invoke addTask on page load (if required by project spec)
    // addTask();
});

