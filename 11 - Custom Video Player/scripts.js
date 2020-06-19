/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build functions */

const togglePlay = () => {
  method = video.paused ? 'play' : 'pause';
  video[method]();
}

const updateButton = () => {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon
}

const skip = (e) => {
  video.currentTime += parseFloat(e.dataset.skip)
}

const handleRangeUpdate = (e) => {
  video[e.name] = e.value
}

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

const scrub = (e) => {
  const scrubTime = (.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up event listeners */
console.log(video)

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', (e) => skip(e.target)));
ranges.forEach(range => range.addEventListener('change', (e) => handleRangeUpdate(e.target)))
ranges.forEach(range => range.addEventListener('mousemove', (e) => handleRangeUpdate(e.target)))

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
