import { getKey } from './api.js';

const fillScores = (arr) => {
  console.log(arr);
  if (arr.length === 0) return;
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  arr.forEach((value) => {
    const li = document.createElement('li');
    const span1 = document.createElement('span');
    span1.innerText = value.user;
    const span2 = document.createElement('span');
    span2.innerText = value.score;
    li.appendChild(span1);
    li.appendChild(span2);
    ul.appendChild(li);
  });
};

const getHash = new Promise((resolve, reject) => {
  const readKEY = () => (localStorage.hasOwnProperty('_KEY') ? JSON.parse(localStorage.getItem('_KEY')) : null);
  if (!readKEY) {
    getKey
      .then()
      .catch();
  }

  setTimeout(() => {
    resolve('xx');
  }, 30);
  // reject();
});

export { fillScores, getHash };