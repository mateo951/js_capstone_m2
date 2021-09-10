import './style.css';
import Masonry from 'masonry-layout';
import retrieveData from './modules/retrieveData.js';
import Utilities from './modules/utilities.js';
import displayData from './modules/displayData.js';
import showLikes from './modules/showLikes.js';
import createLike from './modules/createLike.js';
import Jokes from './modules/jokes.js';
import jokesCounter from './modules/jokesCounter.js';

const apiBasket = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single&amount=10';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y7iejPnAfWtrIBxaaLI3/likes';

const createLikesEvents = () => {
  const gamesButtons = document.querySelectorAll('.likeBttns');
  gamesButtons.forEach((bttn) => {
    bttn.addEventListener('click', async (e) => {
      if (Utilities.hasValue(e.currentTarget.id)) {
        createLike(likesAPI, e.currentTarget.id.substring(1));
        showLikes(await retrieveData(likesAPI));
      }
    });
  });
};

const loadGrid = () => {
  const grid = document.querySelector('.jokesGrid'); // eslint-disable-next-line
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
  });
};

const loadData = async () =>  {
  let jokesData = await retrieveData(apiBasket);
  const { jokes } = jokesData;
  Jokes.setJokes(jokes);
  displayData(jokes);
  loadGrid();
  createLikesEvents();
  document.getElementById('numberJokes').innerHTML = jokesCounter();
  showLikes(await retrieveData(likesAPI));
}

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});
