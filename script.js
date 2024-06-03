document.getElementById('add-btn').addEventListener('click', function() {
  var taskInput = document.getElementById('task-input').value.trim(); // Trim to remove leading and trailing spaces
  
  // Check if the task input is not empty
  if (taskInput !== '') {
    var taskList = document.getElementById('task-list');
    var newTask = document.createElement('li');
    newTask.textContent = taskInput;
    
    newTask.addEventListener('click', function() {
      newTask.classList.toggle('done');
    });
    
    taskList.appendChild(newTask);
    document.getElementById('task-input').value = ''; // Clear the input field
  } else {
    alert('Please enter a task before adding.'); // Display an alert if the input is empty
  }
});
  
