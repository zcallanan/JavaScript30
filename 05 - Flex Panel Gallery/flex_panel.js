const panels = document.querySelectorAll('.panel');

const toggleOpen = (panel) => {
  panel.classList.toggle('open');
};

const toggleActive = (e, panel) => {
  if (e.propertyName.includes('flex')) {
    panel.classList.toggle('open-active');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  panels.forEach(panel => panel.addEventListener('click', () => toggleOpen(panel) ));
  panels.forEach(panel => panel.addEventListener('transitionend', (e) => toggleActive(e, panel) ));
});
