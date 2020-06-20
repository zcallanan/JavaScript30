const pressed = [];
const secretCode = 'anniedog'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)) {
    console.log('The best pups!');
    cornify_add();
  }
})
