document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // console.log("DOM")
  let taskForm = document.getElementById('create-task-form')
  taskForm.addEventListener("submit", formSubmit)
});

function formSubmit(e) {
    e.preventDefault()
    let newTask = document.querySelector('#new-task-description').value
    let newDate = document.querySelector('#new-task-date').value
    let taskItem = document.createElement("li")
    taskItem.innerText = newTask
    let tasks = document.querySelector("#tasks")
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    deleteButton.addEventListener("click", deleteTask)
    tasks.appendChild(taskItem)
    // taskItem.appendChild(newDate)
    taskItem.append(newDate, deleteButton)
}

function deleteTask(e) {
    let cut = e.target.parentElement
    cut.remove()
}
