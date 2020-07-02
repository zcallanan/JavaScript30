const timeNodes = document.querySelectorAll('[data-time]');

//const seconds = timeNodes.map(node => node.dataset.time)

const toNumber = (time) => {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return (hours + minutes / 60).toFixed(2);
}

const array = []

timeNodes.forEach(node => {
  array.push(toNumber(node.dataset.time));
})

const total = array.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, 10), 0);

console.log(total);
