// JavaScript for Present-Absent System

// Fetching elements
const employeeList = document.getElementById("employeeList").children;
const presentBtn = document.getElementById("presentBtn");
const absentBtn = document.getElementById("absentBtn");
const nextBtn = document.getElementById("nextBtn");

// Variables to track the current employee
let currentIndex = 0;

// Function to highlight the current employee
function highlightCurrent() {
    // Remove highlight from all employees
    for (let i = 0; i < employeeList.length; i++) {
        employeeList[i].style.backgroundColor = "transparent";
    }
    // Highlight the current employee
    if (currentIndex < employeeList.length) {
        employeeList[currentIndex].style.backgroundColor = "#d3f9d8";
    }
}

// Function to mark current employee as present
function markPresent() {
    if (currentIndex < employeeList.length) {
        const employee = employeeList[currentIndex];
        updateStatus(employee, "Present", "blue");
    }
}

// Function to mark current employee as absent
function markAbsent() {
    if (currentIndex < employeeList.length) {
        const employee = employeeList[currentIndex];
        updateStatus(employee, "Absent", "red");
    }
}

// Function to update status text next to employee
function updateStatus(employee, status, color) {
    let statusSpan = employee.querySelector(".status");
    if (!statusSpan) {
        // Create a span element if it doesn't exist
        statusSpan = document.createElement("span");
        statusSpan.className = "status";
        employee.appendChild(statusSpan);
    }
    // Update the status text and style
    statusSpan.textContent = ` (${status})`;
    statusSpan.style.color = color;
    alert(`${employee.textContent.split(' (')[0]} marked as ${status}.`);
}

// Function to move to the next employee
function nextEmployee() {
    if (currentIndex < employeeList.length) {
        const employee = employeeList[currentIndex];
        if (!employee.querySelector(".status")) {
            alert("Please mark the current employee as Present or Absent before moving to the next.");
            return;
        }
        currentIndex++;
        if (currentIndex >= employeeList.length) {
            alert("All employees have been marked!");
        }
        highlightCurrent();
    }
}

// Add event listeners
presentBtn.addEventListener("click", markPresent);
absentBtn.addEventListener("click", markAbsent);
nextBtn.addEventListener("click", nextEmployee);

// Initial setup
highlightCurrent();
