const inputs = document.querySelectorAll('input');
let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;
  if (e.shiftKey === true && e.target.checked)
    inputs.forEach(checkbox => {
      // if most recently checked box or the previously checked box are checked
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween === true) { // check the boxes in beetween previous and latest (e.target)
        checkbox.checked = true;
      }
    })
  lastChecked = e.target // save most recently checked box
}

inputs.forEach(element => addEventListener('click', handleCheck));

