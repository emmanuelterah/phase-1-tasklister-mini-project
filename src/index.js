
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const newTask = taskInput.value;

    const taskItem = document.createElement("li");
    taskItem.textContent = newTask;

    taskList.appendChild(taskItem);

    taskInput.value = "";
  });
});
