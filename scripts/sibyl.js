// Typewriter effect
const scanText = 'SCANNING... IDENTITY CONFIRMED.';
const scanEl = document.getElementById('heroScan');
const nameText = 'Hidayati Mardhiah.';
const nameEl = document.getElementById('name');
let i = 0;
let j = 0;

function typeWriter() {
  if (i < scanText.length) {
    scanEl.textContent += scanText.charAt(i);
    i++;
    setTimeout(typeWriter, 55);
  }
}

function nameWriter() {
  if (j < nameText.length) {
    nameEl.textContent += nameText.charAt(j);
    j++;
    setTimeout(nameWriter, 55);
  }
}

setTimeout(() => {
  document.querySelector('h1').classList.add('fade-in');
}, 2100);

setTimeout(typeWriter, 400);
setTimeout(nameWriter, 2200);

setTimeout(() => {
  document.querySelector('.hero-sub').classList.add('fade-in');
}, 3200);

setTimeout(() => {
  const desc = document.querySelector('.hero-desc');
  const tags = document.querySelector('.hero-tags');
  if (desc) desc.classList.add('fade-in');
  if (tags) tags.classList.add('fade-in');
}, 3800);


