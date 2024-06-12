document.getElementById("signupButton").addEventListener('click', signUp);

function isEmpty() {
    var name = document.getElementById('signupName').value.trim();
    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value.trim();
    return !(name && email && password); 
}

function isEmailValid(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isEmailExist(email) {
    var signUpArray = JSON.parse(localStorage.getItem('users')) || [];
    return signUpArray.some(user => user.email === email);
}

function signUp(event) {
    event.preventDefault();  // Prevent form submission
    var name = document.getElementById('signupName').value.trim();
    var email = document.getElementById('signupEmail').value.trim();
    var password = document.getElementById('signupPassword').value.trim();
    var existElement = document.getElementById('exist');
    
    if (isEmpty()) {
        existElement.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return;
    }

    if (!isEmailValid(email)) {
        existElement.innerHTML = '<span class="text-danger m-3">Invalid email format</span>';
        return;
    }

    if (isEmailExist(email)) {
        existElement.innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        return;
    }

    var signUp = {
        name: name,
        email: email,
        password: password
    };

    var signUpArray = JSON.parse(localStorage.getItem('users')) || [];
    signUpArray.push(signUp);
    localStorage.setItem('users', JSON.stringify(signUpArray));

    existElement.innerHTML = '<span class="text-success m-3">Success</span>';
}

document.getElementById('signupForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        signUp(event);
    }
});

document.getElementById('signupName').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        signUp(event);
    }
});

document.getElementById('signupEmail').addEvent
