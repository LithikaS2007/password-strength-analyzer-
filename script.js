function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength");
    let suggestion = document.getElementById("suggestion");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength <= 2) {
        strengthText.innerHTML = "Weak Password ❌";
        strengthText.style.color = "red";
        suggestion.innerHTML = "Use 8+ characters, include uppercase, numbers, and symbols.";
    } 
    else if (strength === 3 || strength === 4) {
        strengthText.innerHTML = "Medium Password ⚠️";
        strengthText.style.color = "orange";
        suggestion.innerHTML = "Try adding special characters.";
    } 
    else {
        strengthText.innerHTML = "Strong Password ✅";
        strengthText.style.color = "green";
        suggestion.innerHTML = "Great! Your password is strong.";
    }
}
