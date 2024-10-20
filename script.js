document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const userId = document.getElementById("userId").value;
    const userPassword = document.getElementById("userPassword").value;
    const statusMessage = document.getElementById("statusMessage");

    if (userId === "" || userPassword === "") {
        statusMessage.textContent = "All fields are required.";
        statusMessage.style.color = "red";
    } else {
        // Simple validation: Check if the password is at least 6 characters
        if (userPassword.length < 6) {
            statusMessage.textContent = "Password must be at least 6 characters long.";
            statusMessage.style.color = "red";
        } else {
            statusMessage.style.color = "green";
            statusMessage.textContent = "Registration successful!";
            // Here you can add code to send the data to the server, if needed.
        }
    }
});
