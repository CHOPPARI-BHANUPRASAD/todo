function addTask() {
    // Get the task input element and its value
    let taskInput = document.getElementById('taskInput');
    let taskValue = taskInput.value.trim();

    // Check if the task value is not empty
    if (taskValue !== '') {
        // Create a new list item
        let li = document.createElement('li');
        li.textContent = taskValue;

        // Create a delete button
        let deleteBtn = document.createElement('span');
       
        deleteBtn.textContent = '   ,  Delete';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = function() {
            li.remove();
        };


        // Append the list item to the task list
        document.getElementById('taskList').appendChild(li);

         // Append the delete button to the list item
         li.appendChild(deleteBtn);

        // Clear the task input
        taskInput.value = '';
    }
}
