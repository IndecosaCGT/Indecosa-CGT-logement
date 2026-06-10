const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

function sendMail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Demande logement';
  const message = document.getElementById('message').value.trim();
  const body = `Nom : ${name}%0D%0AEmail : ${email}%0D%0A%0D%0AMessage :%0D%0A${encodeURIComponent(message)}`;
  window.location.href = `mailto:contact@indecosa.cgt.org?subject=${encodeURIComponent(subject)}&body=${body}`;
  return false;
}
