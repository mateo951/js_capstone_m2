import './style.css';
import Masonry from 'masonry-layout';
import retrieveData from './modules/retrieveData.js';
import retrieveLikes from './modules/retrieveLikes.js';
import setData from './modules/setData.js';
import Utilities from './modules/utilities.js';
// import item from './modules/comment.js';
import displayData from './modules/displayData';
import showLikes from './modules/showLikes.js';
import createLike from './modules/createLike';

const apiBasket = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single&amount=10';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/N7DhoEcSDpK14RDHLmY3/likes'

let createLikesEvents = () => {
  let gamesButtons = document.querySelectorAll('.likeBttns');
  gamesButtons.forEach(bttn => {
    bttn.addEventListener('click', (e) => {
      createLike(likesAPI, e.target.id.substring(1));
    })
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // createBasket(apiBasket);
  // setData(apiBasket, items);
  retrieveData(apiBasket)
    .then((response) => {
      let { jokes } = response;
      console.log(jokes)
      displayData(jokes);
      loadGrid();
      // createLikesEvents();
    });
  // retrieveLikes(likesAPI)
  //   .then((response) => {
  //     showLikes(response);
  //   });
});


let loadGrid = () => {
  const grid = document.querySelector('.jokesGrid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
  });
}





