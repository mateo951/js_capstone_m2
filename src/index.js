import './style.css';
import Masonry from 'masonry-layout';
import retrieveData from './modules/retrieveData.js';
import Utilities from './modules/utilities.js';
// import item from './modules/comment.js';
import displayData from './modules/displayData';
import showLikes from './modules/showLikes.js';
import createLike from './modules/createLike.js';
import Jokes from './modules/jokes.js';
// import createApp from './modules/createInvolvementApi.js';

const apiBasket = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single&amount=10';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y7iejPnAfWtrIBxaaLI3/likes'

let createLikesEvents = () => {
  let gamesButtons = document.querySelectorAll('.likeBttns');
  gamesButtons.forEach(bttn => {
    bttn.addEventListener('click', (e) => {
      if (Utilities.hasValue(e.currentTarget.id)) {
        createLike(likesAPI, e.currentTarget.id.substring(1));
      } else {
        throw 'No id for button';
      }
    })
  });
}

window.addEventListener('DOMContentLoaded', () => {
  retrieveData(apiBasket)
    .then((response) => {
      let { jokes } = response;
      Jokes.setJokes(jokes);
      displayData(jokes);
      loadGrid();
      createLikesEvents();
      document.getElementById('numberJokes').innerHTML = jokesCounter();
      retrieveData(likesAPI)
        .then((response) => {
          showLikes(response);
        });
    });
});

let jokesCounter = () => {
  let jokes = document.querySelectorAll('.grid-item');
  return jokes.length;
}

let loadGrid = () => {
  const grid = document.querySelector('.jokesGrid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
  });
}





