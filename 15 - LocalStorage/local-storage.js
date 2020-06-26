const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
  e.preventDefault();

  const text = (e.target.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  e.target.reset();
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));  // local storage only takes text
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

const toggleDone = (e) => {
  if (!e.target.matches('input')) return; // skip unless input, next if...
  const el = e.target;
  items[el.dataset.index].done = !items[el.dataset.index].done
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);

