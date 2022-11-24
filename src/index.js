import './style.css';
import { toast } from 'wc-toast';
import { fetch } from './api.js';
import { fillScores, getHash, addScore } from './DOM.js';

const refreshDom = async () => {
  await getHash
    .then(
      (resolved) => {
        fetch(resolved)
          .then(
            (resolved) => {
              console.log('resolved:', resolved);

              fillScores(resolved);
            },
            (rejected) => {
              console.log(rejected);
              toast(rejected);
            },
          )
          .catch((err) => {
            console.log(err);
            toast(err);
          });
      },
      (rejected) => {
        console.log(rejected);
        toast(rejected);
      },
    )
    .catch((err) => toast(err));
}

window.document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    getHash
      .then(
        (resolved) => {
          addScore(e, resolved)
            .then(
              (resolved) => {
                console.log('resolved:', resolved);
                refreshDom();
              },
              (rejected) => {
                console.log(rejected);
                toast(rejected);
              },
            );
        },
        (rejected) => {
          console.log(rejected);
          toast(rejected);
        },
      )
      .catch((err) => toast(err));
  });
  refreshDom();
  document.querySelector('#Refresh').addEventListener('click', () => refreshDom());
});