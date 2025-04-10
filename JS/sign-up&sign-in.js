

// Toggle between forms
function showForm(formType) {
    // Toggle forms
    document.getElementById('signin-form').classList.toggle('hidden', formType !== 'signin');
    document.getElementById('signup-form').classList.toggle('hidden', formType !== 'signup');

    // Update button styles
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(formType));
    });
}

// Form validation for sign up
function handleSignUp(e) {
    e.preventDefault();
    const password = e.target.password.value;
    const errorElement = document.getElementById('password-error');

    if (password.length < 8) {
        errorElement.style.display = 'block';
        return;
    }
    
    errorElement.style.display = 'none';
    // Here you would normally send data to a server
    alert('Sign up successful! (Demo only)');
}

// Form handling for sign in
function handleSignIn(e) {
    e.preventDefault();
    // Here you would normally send data to a server
    alert('Sign in successful! (Demo only)');
}