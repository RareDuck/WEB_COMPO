/* La lectura y el gesto horizontal son nativos. Este archivo solo sincroniza los controles. */
const papers = document.getElementById('papeles');
const pages = [...papers.querySelectorAll('.paper')];
const pageLinks = [...document.querySelectorAll('.page-nav__page')];
const previous = document.getElementById('previous-page');
const next = document.getElementById('next-page');
const status = document.getElementById('page-status');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentPage = -1;
let scrollFrame = 0;

function setActivePage(index) {
  if (index === currentPage && pageLinks[index].getAttribute('aria-current') === 'page') return;
  currentPage = index;
  pageLinks.forEach((link, number) => {
    if (number === index) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  previous.href = `#${pages[Math.max(0, index - 1)].id}`;
  next.href = `#${pages[Math.min(pages.length - 1, index + 1)].id}`;
  previous.setAttribute('aria-disabled', String(index === 0));
  next.setAttribute('aria-disabled', String(index === pages.length - 1));
  previous.tabIndex = index === 0 ? -1 : 0;
  next.tabIndex = index === pages.length - 1 ? -1 : 0;
  status.textContent = `Tema ${index + 1} de ${pages.length}`;
}

function goToPage(index, behavior = reducedMotion.matches ? 'auto' : 'smooth') {
  const target = Math.max(0, Math.min(pages.length - 1, index));
  papers.scrollTo({ left: pages[target].offsetLeft, behavior });
}

// El navegador decide si el gesto es vertical u horizontal; no se cancela ningún evento táctil.
papers.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    const index = Math.max(0, Math.min(pages.length - 1, Math.round(papers.scrollLeft / papers.clientWidth)));
    setActivePage(index);
  });
}, { passive: true });

pageLinks.forEach((link, index) => link.addEventListener('click', event => {
  event.preventDefault();
  goToPage(index);
}));
previous.addEventListener('click', event => {
  event.preventDefault();
  if (currentPage > 0) goToPage(currentPage - 1);
});
next.addEventListener('click', event => {
  event.preventDefault();
  if (currentPage < pages.length - 1) goToPage(currentPage + 1);
});

document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  const target = event.target;
  if (target instanceof Element && target.closest('input, textarea, select, video, audio, iframe, [contenteditable], [role="slider"]')) return;
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const destination = currentPage + direction;
  if (destination < 0 || destination >= pages.length) return;
  event.preventDefault();
  goToPage(destination);
});

const initialPage = pages.findIndex(page => `#${page.id}` === window.location.hash);
if (initialPage > 0) {
  setActivePage(initialPage);
  requestAnimationFrame(() => goToPage(initialPage, 'auto'));
}
else setActivePage(0);
