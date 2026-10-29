(() => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const previous = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const count = document.querySelector('#slide-count');
  const total = document.querySelector('#slide-total');
  const progress = document.querySelector('#progress-bar');
  const dots = Array.from(document.querySelectorAll('.dot'));
  const rotatingSkills = ['C++', 'SQL', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Cryptography', 'OOP', 'Data Structures', 'Git'];
  let current = 0;
  let skillIndex = 0;
  total.textContent = String(slides.length).padStart(2, '0');

  function showSlide(index) {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === target);
      slide.setAttribute('aria-hidden', i === target ? 'false' : 'true');
      slide.classList.toggle('leaving-left', i < target);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === target);
      if (i === target) dot.setAttribute('aria-current', 'step');
      else dot.removeAttribute('aria-current');
    });
    current = target;
    count.textContent = String(current + 1).padStart(2, '0');
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    if (history.replaceState) history.replaceState(null, '', `#${slides[current].id}`);
  }
  previous.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.target))));
  document.querySelectorAll('[data-go]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); showSlide(Number(link.dataset.go)); }));
  document.addEventListener('keydown', event => {
    if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); showSlide(current + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); showSlide(current - 1); }
    if (event.key === 'Home') showSlide(0);
    if (event.key === 'End') showSlide(slides.length - 1);
  });
  let touchStartX = 0;
  document.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', event => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 65) showSlide(current + (delta < 0 ? 1 : -1));
  }, { passive: true });
  window.addEventListener('hashchange', () => {
    const hashIndex = slides.findIndex(slide => `#${slide.id}` === location.hash);
    if (hashIndex >= 0 && hashIndex !== current) showSlide(hashIndex);
  });
  setInterval(() => {
    skillIndex = (skillIndex + 1) % rotatingSkills.length;
    const tags = document.querySelectorAll('[data-skills]');
    tags.forEach((tag, i) => { tag.textContent = rotatingSkills[(skillIndex + i * 3) % rotatingSkills.length]; });
  }, 1900);
  const initial = slides.findIndex(slide => `#${slide.id}` === location.hash);
  showSlide(initial >= 0 ? initial : 0);
})();
