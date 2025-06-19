document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        //Form Fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        var isValid = true;
        const messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push('Username less than 3 characters');
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
            isValid = false;
            messages.push('Email not meeting requirements');
        }

        if(password.length <= 8){
            isValid = false;
            messages.push('Password less than 8 characters');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block';

        if(isValid){
            feedbackDiv.textContent = 'Registration successful';
            feedbackDiv.style.color = '#28a745';
        }
        else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });

});