import './style.css';
import { toast } from 'wc-toast';
import { fetch } from './api.js';
import { fillScores, getHash } from './DOM.js';

function refreshDom() {
  getHash
    .then(
      (resolved) => {
        fetch(resolved)
          .then(
            (resolved) => {
              fillScores(resolved);
            },
            (rejected) => {
              toast(rejected);
            },
          )
          .catch((err) => toast(err));
      },
      (rejected) => {
        toast(rejected);
      },
    )
    .catch((err) => toast(err));
}

window.document.addEventListener('DOMContentLoaded', () => {
  refreshDom();
});