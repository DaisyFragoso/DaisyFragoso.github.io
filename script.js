function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  }
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}

// Active nav link on scroll
const sections = ['portfolio','about','jobexperience'];
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = 'portfolio';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Carousel
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const slides = document.querySelectorAll('.flyer-slide');

let current = 0;
let timer;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goTo(i);
  dotsContainer.appendChild(dot);
});

function goTo(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsContainer.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

function startTimer() {
  timer = setInterval(() => goTo(current + 1), 8000);
}

// Pause on hover
track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
track.parentElement.addEventListener('mouseleave', startTimer);

startTimer();
