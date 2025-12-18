const form = document.getElementById('loginForm');
const successMessage = document.querySelector('.success');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        successMessage.style.display = 'block';
    }
});
