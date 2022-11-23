import './style.css';
import { scores } from './api.js';
import { fillScores } from './DOM.js';

window.document.addEventListener('DOMContentLoaded', () => {
  if (scores.length > 0) fillScores(scores);
});