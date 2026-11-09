const testimonials = document.querySelector('#testimonials');
const slides = [...testimonials.querySelectorAll('.testimonial-card')];
const controls = testimonials.querySelector('.testimonial-controls');
const rotation = testimonials.querySelector('[data-rotation]');
const slideRegion = testimonials.querySelector('.testimonial-slides');

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide = 0;
let rotating = !reducedMotion.matches;
let inView = false;
let timer;

const dots = slides.map((slide, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show testimonial ${index + 1} of ${slides.length}`);
  dot.addEventListener('click', () => {
    rotating = false;
    showTestimonial(index);
  });
  controls.append(dot);
  return dot;
});

function showTestimonial(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, position) => {
    const isCurrent = position === currentSlide;
    slide.setAttribute('aria-hidden', String(!isCurrent));
    dots[position].setAttribute('aria-current', String(isCurrent));
  });
  updateTestimonialRotation();
}

function updateTestimonialRotation() {
  clearTimeout(timer);
  rotation.textContent = rotating ? 'Pause autoplay' : 'Resume autoplay';
  slideRegion.setAttribute('aria-live', rotating ? 'off' : 'polite');

  if (rotating && inView && !testimonials.matches(':hover') && !document.hidden) {
    const words = slides[currentSlide].querySelector('blockquote').textContent.trim().split(/\s+/).length;
    const readingTime = Math.max(10000, words * 300);
    timer = setTimeout(() => showTestimonial(currentSlide + 1), readingTime);
  }
}

rotation.addEventListener('click', () => {
  rotating = !rotating;
  updateTestimonialRotation();
});

testimonials.addEventListener('focusin', (event) => {
  if (event.target === rotation) return;
  rotating = false;
  updateTestimonialRotation();
});
testimonials.addEventListener('mouseenter', updateTestimonialRotation);
testimonials.addEventListener('mouseleave', updateTestimonialRotation);
document.addEventListener('visibilitychange', updateTestimonialRotation);
reducedMotion.addEventListener('change', () => {
  rotating = !reducedMotion.matches;
  updateTestimonialRotation();
});

new IntersectionObserver(([entry]) => {
  inView = entry.isIntersecting;
  updateTestimonialRotation();
}, { threshold: 0.3 }).observe(slideRegion);

showTestimonial(0);
testimonials.dataset.carousel = '';
controls.hidden = false;
rotation.hidden = false;
