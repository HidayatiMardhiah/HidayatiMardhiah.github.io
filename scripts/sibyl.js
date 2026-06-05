const canvas = document.getElementById('sibyCanvas');
const ctx = canvas.getContext('2d');
const clickHint = document.querySelector('.click-hint');
const dossier = document.getElementById('dossier');

const SIZE = 420;
const CX = SIZE / 2;
const CY = SIZE / 2;

canvas.width = SIZE;
canvas.height = SIZE;
canvas.style.width = SIZE + 'px';
canvas.style.height = SIZE + 'px';

const rings = [
  { r: 200, fill: 'rgba(0,212,232,0.03)', stroke: 'rgba(0,212,232,0.15)', ticks: 72, tickLen: 6 },
  { r: 160, fill: 'rgba(0,212,232,0.05)', stroke: 'rgba(0,212,232,0.25)', ticks: 48, tickLen: 5 },
  { r: 120, fill: 'rgba(0,212,232,0.07)', stroke: 'rgba(0,212,232,0.4)',  ticks: 36, tickLen: 4 },
  { r: 85,  fill: 'rgba(0,212,232,0.1)',  stroke: 'rgba(0,212,232,0.5)',  ticks: 24, tickLen: 4 },
  { r: 55,  fill: 'rgba(0,212,232,0.12)', stroke: 'rgba(0,212,232,0.6)',  ticks: 0,  tickLen: 0 },
];

let angle = 0;

function draw() {
  ctx.clearRect(0, 0, SIZE, SIZE);

  rings.forEach(ring => {
    ctx.beginPath();
    ctx.arc(CX, CY, ring.r, 0, Math.PI * 2);
    ctx.fillStyle = ring.fill;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(CX, CY, ring.r, 0, Math.PI * 2);
    ctx.strokeStyle = ring.stroke;
    ctx.lineWidth = 1;
    ctx.stroke();

    for (let i = 0; i < ring.ticks; i++) {
      const a = (i / ring.ticks) * Math.PI * 2;
      const x1 = CX + Math.cos(a) * ring.r;
      const y1 = CY + Math.sin(a) * ring.r;
      const x2 = CX + Math.cos(a) * (ring.r - ring.tickLen);
      const y2 = CY + Math.sin(a) * (ring.r - ring.tickLen);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = ring.stroke;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  });

  const grad = ctx.createLinearGradient(
    CX, CY,
    CX + Math.cos(angle) * 200,
    CY + Math.sin(angle) * 200
  );
  grad.addColorStop(0, 'rgba(0,212,232,0.12)');
  grad.addColorStop(1, 'rgba(0,212,232,0)');
  ctx.beginPath();
  ctx.moveTo(CX, CY);
  ctx.arc(CX, CY, 200, angle - 0.5, angle);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  angle += 0.02;
  requestAnimationFrame(draw);
}

draw();

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

setTimeout(typeWriter, 400);
setTimeout(nameWriter, 2200);

setTimeout(() => {
  document.querySelector('.hero-sub').classList.add('fade-in');
}, 3200);

setTimeout(() => {
  document.querySelector('.hero-desc').classList.add('fade-in');
  document.querySelector('.hero-tags').classList.add('fade-in');
}, 3800);

setTimeout(() => {
  document.querySelector('.hero-right').classList.add('fade-in');
}, 4400);

setTimeout(() => {
  document.querySelector('h1').classList.add('fade-in');
}, 2100);

// Effect for profile
clickHint.addEventListener('click', () => {
  dossier.classList.toggle('open');
});

