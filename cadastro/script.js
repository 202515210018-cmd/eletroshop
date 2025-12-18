const form = document.getElementById('Cadastro');
const sucesso = document.querySelector('.sucesso');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
        sucesso.style.display = 'block';
    }
});
