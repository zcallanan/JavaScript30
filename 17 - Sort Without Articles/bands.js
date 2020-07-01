const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let html = ''
const unorderedList = document.getElementById('bands');

// sort bands sans 'The', 'A', or 'An'
const process = (string) => {
  const stringArray = string.split(' ');
  if (stringArray[0] === 'The' || stringArray[0] === 'A' || stringArray[0] === 'An') {
    stringArray.shift()
    return stringArray.join(' ');
  } else {
    return string;
  }
}

// generate an object with processed array
const mapped = bands.map(function(string, i) {
  return { index: i, value: process(string) };
})

// sort the object
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// create a new array using the sort order of indexes in the object
const result = mapped.map(function(value){
  return bands[value.index];
});

// build HTML string
result.forEach(string => {
  html = `${html} <li>${string}</li>`
})

// write HTML to the view
unorderedList.innerHTML = html
