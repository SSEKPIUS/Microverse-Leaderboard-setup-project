const axios = require('axios').default;

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const fetch = (key) => new Promise((resolve, reject) => {
  const response = axios.get(`${baseUrl}games/${key}/scores/`);
  response.then((res) => {
    resolve(res.data.result);
  }).catch((err) => {
    reject(new Error(`No Scores to list: ${err}`));
  });
});

const post = (name, score, key) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}games/${key}/scores/`, {
    user: name,
    score,
  })
    .then((response) => resolve(response))
    .catch((err) => reject(new Error(err)));
});

const getKey = new Promise((resolve, reject) => {
  axios.post(`${baseUrl}games/`, {
    name: 'My cool new game',
  }).then((response) => {
    const { result } = response.data;
    const key = result.split('Game with ID:')[1].replace('added.', '').trim();
    resolve(key);
  })
    .catch((error) => {
      reject(new Error(error));
    });
});

export { fetch, post, getKey };