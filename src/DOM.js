import { getKey, post } from './api.js';

const fillScores = (arr) => {
  if (arr.length === 0) return;
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  arr.forEach((value) => {
    const li = document.createElement('li');
    const span1 = document.createElement('span');
    span1.innerText = value.user;
    const span2 = document.createElement('span');
    span2.classList.add('score-value');
    span2.innerText = value.score;
    li.appendChild(span1);
    li.appendChild(span2);
    ul.appendChild(li);
  });
};

const getHash = new Promise((resolve, reject) => {
  const readKEY = (localStorage.hasOwnProperty('_KEY') ? localStorage.getItem('_KEY') : null);
  if (!readKEY) {
    getKey
      .then(
        (resolved) => {
          localStorage.setItem('_KEY', resolved);
          resolve(resolved);
        },
        (rejected) => reject(rejected),
      );
  } else {
    resolve(readKEY);
  }
});

const addScore = (e, key) => new Promise((resolve, reject) => {
  const name = e.target.querySelector('#name').value;
  const score = e.target.querySelector('#score').value;
  post(name, score, key)
    .then(
      (resolved) => {
        e.target.reset();
        resolve(resolved);
      },
      (rejected) => reject(rejected),
    );
});

export { fillScores, getHash, addScore };