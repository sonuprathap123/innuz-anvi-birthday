const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => {
  document.getElementById(button.dataset.go).scrollIntoView({behavior:'smooth'});
}));
document.querySelectorAll('[data-toast]').forEach(button => button.addEventListener('click', () => showToast(button.dataset.toast)));

let answered = false;
document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
  if (answered) return;
  answered = true;
  const correct = button.dataset.answer === '6';
  button.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) document.querySelector('[data-answer="6"]').classList.add('correct');
  document.getElementById('result').textContent = correct
    ? 'അടിപൊളി! ശരിയുത്തരം! 🥳 Innuz impressed!'
    : 'അയ്യേ! തെറ്റിപ്പോയല്ലോ! 😂 Anvi-ക്ക് 6 പല്ലാണ് ട്ടോ!';
  document.getElementById('score').textContent = correct ? '1 / 1 — കിടിലൻ!' : '0 / 1 — അടുത്ത തവണ നോക്കാം! 😜';
}));

document.getElementById('wishForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const wish = document.getElementById('wish').value.trim();
  if (!name || !wish) return;
  const card = document.createElement('div');
  card.className = 'wish-card';
  const author = document.createElement('strong');
  author.textContent = name + ' എഴുതിയത്:';
  const message = document.createElement('p');
  message.textContent = wish;
  card.append(author, message);
  document.getElementById('wishPreview').prepend(card);
  event.target.reset();
  showToast('ആഹാ, നല്ലൊരു ആശംസ! Innuz ഇത് സൂക്ഷിച്ചുവെച്ചോളാം! 💗');
});
