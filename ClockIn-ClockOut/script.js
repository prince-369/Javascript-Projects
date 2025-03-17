// let employees = JSON.parse(localStorage.getItem("employees")) || [];

// function getCurrentTime() {
//     return new Date().toLocaleString();
// }

// function findEmployee(roll) {
//     return employees.find(emp => emp.rollNumber === roll);
// }

// function saveData() {
//     localStorage.setItem("employees", JSON.stringify(employees));
// }

// function updateTable() {
//     let table = document.getElementById("attendanceTable");
//     table.innerHTML = "";

//     employees.forEach(emp => {
//         let row = `<tr>
//             <td>${emp.rollNumber}</td>
//             <td>${emp.clockIn || "-"}</td>
//             <td>${emp.breakIn || "-"}</td>
//             <td>${emp.breakOut || "-"}</td>
//             <td>${emp.clockOut || "-"}</td>
//             <td>${emp.workHours || "-"}</td>
//             <td>${emp.breakHours || "-"}</td>
//         </tr>`;
//         table.innerHTML += row;
//     });
// }

// function clockIn() {
//     let roll = document.getElementById("rollNumber").value;
//     if (!roll) return alert("Please enter Roll Number");

//     let emp = findEmployee(roll);
//     if (emp) return alert("Employee already clocked in!");

//     employees.push({
//         rollNumber: roll,
//         clockIn: getCurrentTime(),
//         breakIn: null,
//         breakOut: null,
//         clockOut: null,
//         workHours: null,
//         breakHours: null
//     });

//     saveData();
//     updateTable();
// }

// function breakIn() {
//     let roll = document.getElementById("rollNumber").value;
//     if (!roll) return alert("Please enter Roll Number");

//     let emp = findEmployee(roll);
//     if (!emp) return alert("Employee not found!");

//     emp.breakIn = getCurrentTime();
//     saveData();
//     updateTable();
// }

// function breakOut() {
//     let roll = document.getElementById("rollNumber").value;
//     if (!roll) return alert("Please enter Roll Number");

//     let emp = findEmployee(roll);
//     if (!emp || !emp.breakIn) return alert("Break In not recorded!");

//     let breakInTime = new Date(emp.breakIn);
//     let breakOutTime = new Date();
//     emp.breakOut = breakOutTime.toLocaleString();
//     emp.breakHours = ((breakOutTime - breakInTime) / 3600000).toFixed(2) + " hrs";

//     saveData();
//     updateTable();
// }

// function clockOut() {
//     let roll = document.getElementById("rollNumber").value;
//     if (!roll) return alert("Please enter Roll Number");

//     let emp = findEmployee(roll);
//     if (!emp || emp.clockOut) return alert("Employee not found or already clocked out!");

//     let clockInTime = new Date(emp.clockIn);
//     let clockOutTime = new Date();
//     emp.clockOut = clockOutTime.toLocaleString();
//     emp.workHours = ((clockOutTime - clockInTime) / 3600000).toFixed(2) + " hrs";

//     saveData();
//     updateTable();
// }

// updateTable();









// // Local storage se purana data load karna
// let employees = JSON.parse(localStorage.getItem("employees")) || [];

// // Current time lene ke liye function
// function getCurrentTime() {
//     return new Date().toLocaleString();
// }

// // Data ko local storage me save karne ka function
// function saveData() {
//     localStorage.setItem("employees", JSON.stringify(employees));
// }

// // Table ko update karne ka function
// function updateTable() {
//     let table = document.getElementById("attendanceTable");
//     table.innerHTML = "";

//     employees.forEach(emp => {
//         let row = `<tr>
//             <td>${emp.rollNumber}</td>
//             <td>${emp.clockIn || "-"}</td>
//             <td>${emp.breakIn || "-"}</td>
//             <td>${emp.breakOut || "-"}</td>
//             <td>${emp.clockOut || "-"}</td>
//             <td>${emp.workHours || "-"}</td>
//             <td>${emp.breakHours || "-"}</td>
//         </tr>`;
//         table.innerHTML += row;
//     });
// }

// // Clock In function
// function clockIn() {
//     let roll = document.getElementById("rollNumber").value;
//     if (!roll) {
//         alert("Please enter Roll Number");
//         return;
//     }

//     let emp = employees.find(e => e.rollNumber === roll);
//     if (emp) {
//         alert("Employee already clocked in!");
//         return;
//     }

//     employees.push({
//         rollNumber: roll,
//         clockIn: getCurrentTime(),
//         breakIn: null,
//         breakOut: null,
//         clockOut: null,
//         workHours: null,
//         breakHours: null
//     });

//     saveData();
//     updateTable();
// }

// // Break In function
// function breakIn() {
//     let roll = document.getElementById("rollNumber").value;
//     let emp = employees.find(e => e.rollNumber === roll);

//     if (!roll || !emp) {
//         alert("Invalid Roll Number!");
//         return;
//     }

//     emp.breakIn = getCurrentTime();
//     saveData();
//     updateTable();
// }

// // Break Out function
// function breakOut() {
//     let roll = document.getElementById("rollNumber").value;
//     let emp = employees.find(e => e.rollNumber === roll);

//     if (!roll || !emp || !emp.breakIn) {
//         alert("Invalid Break Out request!");
//         return;
//     }

//     emp.breakOut = getCurrentTime();
//     let breakInTime = new Date(emp.breakIn);
//     let breakOutTime = new Date();
//     emp.breakHours = ((breakOutTime - breakInTime) / 3600000).toFixed(2) + " hrs";

//     saveData();
//     updateTable();
// }

// // Clock Out function
// function clockOut() {
//     let roll = document.getElementById("rollNumber").value;
//     let emp = employees.find(e => e.rollNumber === roll);

//     if (!roll || !emp || emp.clockOut) {
//         alert("Invalid Clock Out request!");
//         return;
//     }

//     emp.clockOut = getCurrentTime();
//     let clockInTime = new Date(emp.clockIn);
//     let clockOutTime = new Date();
//     emp.workHours = ((clockOutTime - clockInTime) / 3600000).toFixed(2) + " hrs";

//     saveData();
//     updateTable();
// }

// // Page load hone par table update ho
// updateTable();




let employees = [];

function getCurrentTime() {
    return new Date().toLocaleString();
}


// function updateTable() {
//     let table = document.getElementById("attendanceTable");
//     table.innerHTML = "";

//     employees.forEach(emp => {
//         let row = `<tr>
//             <td>${emp.rollNumber}</td>
//             <td>${emp.clockIn || "-"}</td>
//             <td>${emp.breakIn || "-"}</td>
//             <td>${emp.breakOut || "-"}</td>
//             <td>${emp.clockOut || "-"}</td>
//             <td>${emp.workHours || "-"}</td>
//             <td>${emp.breakHours || "-"}</td>
//         </tr>`;
//         table.innerHTML += row;
//     });
// }



function updateTable() {
    let table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    
    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];  
        let row = document.createElement("tr");

        row.appendChild(createCell(emp.rollNumber));  
        row.appendChild(createCell(emp.clockIn));     
        row.appendChild(createCell(emp.breakIn));     
        row.appendChild(createCell(emp.breakOut));  
        row.appendChild(createCell(emp.clockOut));    
        row.appendChild(createCell(emp.workHours));   
        row.appendChild(createCell(emp.breakHours)); 

        table.appendChild(row);
    }
}

function createCell(value) {
    let cell = document.createElement("td"); 
    cell.textContent = value || "-";         
    return cell;  
}


function clockIn() {
    let roll = document.getElementById("rollNumber").value;
    if (!roll) {
        alert("Please enter Roll Number"); 
        return;
    }

    let emp = employees.find(e => e.rollNumber === roll);
    if (emp) {
        alert("Employee already clocked in!");
        return;
    }

    employees.push({
        rollNumber: roll,
        clockIn: getCurrentTime(),
        breakIn: null,
        breakOut: null,
        clockOut: null,
        workHours: null,
        breakHours: null
    });

    updateTable();
}

function breakIn() {
    let roll = document.getElementById("rollNumber").value;
    let emp = employees.find(e => e.rollNumber === roll);

    if (!roll || !emp) {
        alert("Invalid Roll Number!");
        return;
    }

    emp.breakIn = getCurrentTime();
    updateTable();
}
function breakOut() {
    let roll = document.getElementById("rollNumber").value;
    let emp = employees.find(e => e.rollNumber === roll);

    if (!roll || !emp || !emp.breakIn) {
        alert("Invalid Break Out request!");
        return;
    }

    emp.breakOut = getCurrentTime();
    let breakInTime = new Date(emp.breakIn);
    let breakOutTime = new Date();
    emp.breakHours = ((breakOutTime - breakInTime) / 3600000).toFixed(2) + " hrs";

    updateTable();
}

function clockOut() {
    let roll = document.getElementById("rollNumber").value;
    let emp = employees.find(e => e.rollNumber === roll);

    if (!roll || !emp || emp.clockOut) {
        alert("Invalid Clock Out request!");
        return;
    }

    emp.clockOut = getCurrentTime();
    let clockInTime = new Date(emp.clockIn);
    let clockOutTime = new Date();
    emp.workHours = ((clockOutTime - clockInTime) / 3600000).toFixed(2) + " hrs";

    updateTable();
}

updateTable();
