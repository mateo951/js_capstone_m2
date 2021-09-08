import './style.css';
import retrieveData from './modules/retrieveData.js';
import setData from './modules/setData.js';
import createBasket from './modules/createBasket.js';
import Utilities from './modules/utilities.js';
// import item from './modules/comment.js';



const popup = document.getElementById('popup-article');

document.addEventListener('DOMContentLoaded', (...e) => {
  createBasket(...e)
    .then(() => {
      const commentButtons = document.getElementsByClassName('comment-button');
      Array.from(commentButtons).forEach((button) => {
        button.addEventListener('click', openPopupListener(button, popup));
      });
    });
  // pagination(...e);
});

const closePopupButton = document.getElementById('close-popup');
closePopupButton.addEventListener('click', closePopupListener(popup));


const apiBasket = 'https://getpantry.cloud/apiv1/pantry/f30333b4-125d-4db2-8a42-2c216adec5bc/basket/games';
window.addEventListener('DOMContentLoaded', () => {
  const items = {
    games: [{ game: 'Breath of the Wild', imageURL: './media/bow.png' },
      { game: 'Super Mario 64', imageURL: './media/bow.png' },
      { game: 'Age of Empires', imageURL: './media/bow.png' },
      { game: 'Donkey Kong', imageURL: './media/bow.png' },
      { game: 'The Sims', imageURL: './media/bow.png' },
      { game: 'Grand Theft Auto', imageURL: './media/bow.png' },
    ],
  };
  if (Utilities.CheckJSON(JSON.stringify(items))) {
    // createBasket(apiBasket);
    // setData(apiBasket, items);
    retrieveData(apiBasket);
  }
});

