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

const post = (args) => {

};

const getKey = () => axios.post(`${baseUrl}games/`, {
  params: {
    name: 'My cool new game',
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    // always executed
  });

export { fetch, post, getKey };