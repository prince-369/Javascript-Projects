const addAtnd = () => {
    const fullName = document.getElementById("fullName");
    const name = fullName.value.trim();

    if (name === '') {
        alert("Please Enter Your Name ??");
        return;
    }

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    // Get attendance list container
    const atndList = document.getElementById("atndList");

    // Create a new entry
    const newEntry = document.createElement("div");
    newEntry.classList.add("attendance-entry");
    newEntry.innerHTML = `<strong>Name:</strong> ${name} |
                          <strong>Date:</strong> ${formattedDate} |
                          <strong>Time:</strong> ${formattedTime}`;

    // Append entry to attendance list
    atndList.appendChild(newEntry);

    // Scroll to the bottom to show the latest entry
    atndList.scrollTop = atndList.scrollHeight;

    // Clear the input field
    fullName.value = '';
};
