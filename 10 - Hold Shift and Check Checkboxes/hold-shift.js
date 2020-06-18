const inputs = document.querySelectorAll('input');
let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;
  if (e.shiftKey === true && e.target.checked)
    inputs.forEach(checkbox => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween === true) {
        checkbox.checked = true;
      }
    })
  lastChecked = e.target
}

inputs.forEach(element => addEventListener('click', handleCheck));

