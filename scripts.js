document.addEventListener("DOMContentLoaded", function () {
    // Select elements from the DOM
    const usernameInput = document.getElementById("username"); // Input field for user's name
    const saveBtn = document.getElementById("save-btn"); // Button to save the name
    const clearBtn = document.getElementById("clear-btn"); // Button to clear stored name
    const displayName = document.getElementById("display-name"); // Paragraph for displaying name
    const heading = document.getElementById("welcome-message"); // Heading that updates with user's name

    // update the greeting message based on time of day
    function updateGreeting(name) {
        const hours = new Date().getHours();
        let greeting = "Welcome";
        
        if (hours < 12) {
            greeting = "Good Morning";
        } else if (hours < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        // Update the heading text dynamically
        heading.textContent = `${greeting}, ${name}!`;
    }

    // load and display the stored name from localStorage
    function loadName() {
        const storedName = localStorage.getItem("username"); // Retrieve stored name
        if (storedName) {
            displayName.textContent = `Saved Name: ${storedName}`; // Show stored name
            updateGreeting(storedName); // Update greeting
        }
    }

    // Event listener for saving the name
    saveBtn.addEventListener("click", function () {
        const name = usernameInput.value.trim(); // Get and clean input value
        if (name) {
            localStorage.setItem("username", name); // Save name to localStorage
            displayName.textContent = `Saved Name: ${name}`; // Display saved name
            updateGreeting(name); // Update greeting
        }
    });

    // Event listener for clearing the stored name
    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("username"); // Remove name from localStorage
        displayName.textContent = ""; // Clear displayed name
        heading.textContent = "Welcome, User!"; // Reset heading text
    });

    // Load and display the name when the page is opened/refreshed
    loadName();
});
