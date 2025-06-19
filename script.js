document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        //Form Fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if(username.length < 3){
            isValid = false;
            username.textContent = messages.push('Username less than 3 characters');
        }
        else{
            username.textContent = '';
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)){
            isValid = false;
            email.textContent = messages.push('Email not meeting requirements');
        }
        else{
            email.textContent = '';
        }

        if(password.length >= 8){
            isValid = false;
            password.textContent = messages.push('Password less than 8 characters');
        }
        else{
            password.textContent = '';
        }

        // Displaying Feedback
        feedbackDiv.style.display('block');

        if(isValid = true){
            feedbackDiv.textContent('Registration successful!');
            feedbackDiv.style.color('#28a745');
        }
        else{
            feedbackDiv.innerHTML(messages.join("<br>"));
            feedbackDiv.style.color('#dc3545');
        }
    });

});