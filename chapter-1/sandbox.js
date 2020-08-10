// jshint esversion: 9
const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // ul.innerHTML += '<li>new thing to do</li>';
  const li = document.createElement('li');
  li.textContent = 'smth new';
  ul.append(li);
  // ul.prepend(li);
});

const items = document.querySelectorAll('li');
// console.log(items);
items.forEach(item => {
  // console.log(item);
  item.addEventListener('click', (e) => {
    console.log('event in LI');
    e.stopPropagation(); 
    e.target.remove();
  });
});

ul.addEventListener('click', () => {
  console.log('event in UL');
});