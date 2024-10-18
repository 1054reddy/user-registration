document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const userId = document.getElementById("userId").value;
    const userPassword = document.getElementById("userPassword").value;
    const statusMessage = document.getElementById("statusMessage");

    if (userId === "" || userPassword === "") {
        statusMessage.textContent = "All fields are required.";
    } else {
        // Simple validation: Check if the password is at least 6 characters
        if (userPassword.length < 6) {
            statusMessage.textContent = "Password must be at least 6 characters long.";
        } else {
            statusMessage.style.color = "green";
            statusMessage.textContent = "Registration successful!";
            // You can add code here to send data to the server
        }
    }
});
