const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

const eventCapture = (e) => {
  if (e.type === 'mousedown') {
    isDown = true;
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  } else if (e.type === 'mousemove') {
    if (!isDown) return;
    e.preventDefault; // stop selection
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk
  }
};

const eventEnds = () => {
  isDown = false;
  slider.classList.remove('active')
};

slider.addEventListener('mousedown', eventCapture); // initial state
slider.addEventListener('mouseleave', eventEnds); // stop active state
slider.addEventListener('mouseup', eventEnds); // stop active state
slider.addEventListener('mousemove', eventCapture); // active state in progress
