function animateBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    bar.style.width = bar.dataset.w + '%';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (bars.length) setTimeout(animateBars, 300);
});
