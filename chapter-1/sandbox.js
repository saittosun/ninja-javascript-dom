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

// const items = document.querySelectorAll('li');
// // console.log(items);
// items.forEach(item => {
//   // console.log(item);
//   item.addEventListener('click', (e) => {
//     console.log('event in LI');
//     e.stopPropagation(); 
//     e.target.remove();
//   });
// });

ul.addEventListener('click', (e) => {
  // console.log('event in UL');
  console.log(e.target);// li de event listener yok ama bubling den dolayi parent teki event listener i okuyor ve console da hangi li yi tikladi isek onu gosteriyor. bu ayni zamanda button daki click event de etkisini gosterecek. because we are not attaching the event listener to the li's anymore so it doesn't matter that new these li tags don't have event listeners. What matters is that we're clicking them and the event bubbles up to the well which we do have an event   listener attached to.
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});