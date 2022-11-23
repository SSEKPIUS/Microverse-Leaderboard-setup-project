const fillScores = (arr) => {
  if (arr.length === 0) return;
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  arr.forEach((value, index) => {
    const li = document.createElement('li');
    const span0 = document.createElement('span');
    span0.innerText = value.id;
    span0.style.display = 'none';
    const span1 = document.createElement('span');
    span1.innerText = value.name;
    const span2 = document.createElement('span');
    span2.innerText = value.score;
    li.appendChild(span0);
    li.appendChild(span1);
    li.appendChild(span2);
    ul.appendChild(li);
  });
};

const post = () => {

};

export { fillScores, post };