function addTask() {
    let taskName = document.getElementById("taskName").value;
    let taskDate = document.getElementById("taskDate").value;

    if (taskName === "" || taskDate === "") {
        alert("Please enter task name and date!");
        return;
    }

    let taskList = document.querySelector(".task-list");

    let task = document.createElement("div");
    task.classList.add("task");

    task.innerHTML = ` 
        <span>${taskName} <br> <small>${taskDate}</small></span>
        <div class="icons">
            <i class="complete">✅</i>
            <i class="delete">🗑️</i>
        </div>
    `;

    task.querySelector(".complete").addEventListener("click", function() {
        task.classList.toggle("completed");
    });

    task.querySelector(".delete").addEventListener("click", function() {
        task.remove();
    });

    taskList.appendChild(task);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
}
