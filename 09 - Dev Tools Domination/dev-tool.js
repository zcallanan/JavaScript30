const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }, { name: 'Annie', age: 12 }];
const p = document.querySelector('p');
const makeGreen = () => {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
p.addEventListener('click', () => {
  // warning!
console.warn('OH NOOO');

// Error :|
console.error('I am an error :(');
})

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'fun');

// Styled
console.log('%c I am some big text', 'font-size: 14px;');

// Info
console.info('Annie is the best dog');

// Testing
// console.assert(p.classList.contains('ouch'), 'That is wrong!'); // asserts as this is false

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`${dog.name} is ${dog.age}`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Annie');

// timing

console.time('fetching data');
fetch('https://api.github.com/users/zcallanan')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

  console.table(dogs);
