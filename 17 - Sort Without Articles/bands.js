const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let html = ''
const unorderedList = document.getElementById('bands');

// sort bands sans 'The', 'A', or 'An'
const process = (string) => {
  return string.replace(/^(a |the |an )/i, '').trim()
}

const sortedBands = bands.sort((a,b) => process(a) > process(b) ? 1 : -1);

// build HTML string
sortedBands.forEach(string => {
  html = `${html} <li>${string}</li>`
})

// write HTML to the view
unorderedList.innerHTML = html
