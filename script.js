document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada ao PATOMOL.');
    form.reset();
  });
}
