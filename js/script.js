function handleSignUp(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    // Here you can add code to send the signup data to the server

    alert('Sign up successful');
    window.location.href = 'login.html';
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add code to verify the login credentials

    alert('Login successful');
    window.location.href = 'index.html';
}
