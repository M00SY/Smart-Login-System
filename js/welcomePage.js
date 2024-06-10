      document.addEventListener('DOMContentLoaded', function() {
            var username = localStorage.getItem('sessionUsername');
            var usernameElement = document.getElementById('username');

            if (username && usernameElement) {
                usernameElement.innerText = 'Welcome, ' + username + ' :D';
            } else {
                usernameElement.innerText = 'Welcome...';
            }

            var closeIcon = document.getElementById('close-icon');
            if (closeIcon) {
                closeIcon.addEventListener('click', function() {
                    localStorage.removeItem('sessionUsername');
                    location.href = 'index.html';
                });
            }

            // Attach the event listener to the document for the Escape key
            document.addEventListener('keyup', function(event) {
                if (event.key === 'Escape') {
                    localStorage.removeItem('sessionUsername');
                    location.href = 'index.html';
                }
            });
        });