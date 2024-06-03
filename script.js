document.getElementById('add-btn').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    var newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    
    newTask.addEventListener('click', function() {
      newTask.classList.toggle('done');
    });
    
    taskList.appendChild(newTask);
    taskInput.value = '';
  });
  
  document.getElementById('profile-pic').addEventListener('change', function(event) {
    var img = document.getElementById('profile-img');
    img.src = URL.createObjectURL(event.target.files[0]);
  });
  