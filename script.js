function showPasswordGenerator() {
    var container = document.getElementById("container");
    container.style.display = "block";
    setTimeout(function () {
        container.classList.add("show-container");
        var startButton = document.querySelector(".start-button");
        startButton.style.display = "none";
    }, 100); // Delay the animation slightly to ensure smooth transition
}

function validatePreferences() {
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    var includeSpecialCharacters = document.getElementById("includeSpecialCharacters").checked;

    if (!includeNumbers && !includeUppercase && !includeSymbols && !includeSpecialCharacters) {
        var message = "Please select at least one option before generating the password.";
        displayMessage(message);
    } else {
        generatePassword();
    }
}

function displayMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.display = "block";

    setTimeout(function () {
        messageElement.style.display = "none";
    }, 2000);
}

function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var password = "";

    if (document.getElementById("includeNumbers").checked) {
        charset += "0123456789";
    }

    if (document.getElementById("includeUppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("includeSymbols").checked) {
        charset += "!@#$%^&*()_+-={}[];:,.<>?";
    }

    if (document.getElementById("includeSpecialCharacters").checked) {
        charset += "~`|";
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").textContent = password;
}
//to copy thr password
function copyPassword() {
    var passwordText = document.getElementById("password");
    var range = document.createRange();
    range.selectNode(passwordText);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the password text
    document.execCommand("copy"); // Copy the text to the clipboard

    // Display the "Password Copied" message
    var copyMessage = document.getElementById("copy-message");
    copyMessage.style.display = "block";
    setTimeout(function () {
        copyMessage.style.display = "none";
    }, 2000);
}


