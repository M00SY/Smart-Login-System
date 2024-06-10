document.getElementById('signUp').addEventListener('click', function() {
    location.href = 'signup.html'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var signinEmail = document.getElementById('signinEmail');
    var signinPassword = document.getElementById('signinPassword');
    var signinButton = document.getElementById('signinButton');
    var signinError = document.getElementById('signinError');

    var signUpArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    function login() {
        var email = signinEmail.value.trim();
        var password = signinPassword.value.trim();

        if (!email || !password) {
            signinError.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
            return;
        }

        var user = signUpArray.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

        if (user) {
            localStorage.setItem('sessionUsername', user.name);
            location.href = 'welcomePage.html'; 
        } else {
            signinError.innerHTML = '<span class="text-danger m-3">Incorrect email or password</span>';
        }
    }

    signinButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        login();
    });

    signinEmail.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            login();
        }
    });

    signinPassword.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            login();
        }
    });
});

