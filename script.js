// Progressive enhancement: navigation remains available when JavaScript is disabled.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.hidden = false;
navigation.classList.add('is-enhanced');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const desktopQuery = window.matchMedia('(min-width: 850px)');
desktopQuery.addEventListener('change', closeMenu);

// The mini-course runs entirely in the browser, with no account or tracking.
const practice = document.querySelector('#practice');
const feedback = document.querySelector('#practice-feedback');
const answerButtons = document.querySelectorAll('[data-answer]');
document.querySelector('#start-learning').addEventListener('click', () => {
  practice.hidden = false;
  document.querySelector('#practice-title').focus();
});
answerButtons.forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    answerButtons.forEach((answer) => answer.setAttribute('aria-pressed', String(answer === button)));
    feedback.textContent = button.dataset.answer === 'Asante'
      ? 'Exactly! Asante means “Thank you.” Try using it in your next conversation.'
      : button.dataset.answer === 'Jambo'
        ? 'Jambo means “Hello.” Try another word for “Thank you.”'
        : 'Karibu means “Welcome.” Try another word for “Thank you.”';
  });
});
document.querySelector('#reset-practice').addEventListener('click', () => {
  answerButtons.forEach((button) => button.setAttribute('aria-pressed', 'false'));
  feedback.textContent = '';
  answerButtons[0].focus();
});

// Course buttons preselect the enquiry option, without submitting anything.
document.querySelectorAll('[data-course]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#lesson-type').value = link.dataset.course;
  });
});

// No backend: create an honest, local enquiry draft. See README.md to connect a service.
document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const draft = [
    'Swahili Academy — lesson enquiry (not sent)',
    '',
    'Name: ' + data.get('name'),
    'Email: ' + data.get('email'),
    'Lesson: ' + data.get('lesson'),
    '',
    'Goals: ' + (data.get('message') || 'Not specified'),
  ].join('\n');
  const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'swahili-academy-enquiry.txt';
  document.body.append(download);
  download.click();
  download.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#form-status').textContent = 'Your enquiry draft is ready to download. It has not been sent, and no lesson has been reserved. Contact details will be added here soon.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
