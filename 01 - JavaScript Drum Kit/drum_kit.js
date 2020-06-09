const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // don't go further for keys with no sound

  playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
      audio.currentTime = 0; // rewind to start
    })
    .catch(error => {
      // Auto-play was prevented
    });
  }
  key.classList.add('playing');
};

const removeTransition = (e) => {
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
