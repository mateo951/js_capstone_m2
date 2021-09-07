import './style.css';
import retrieveData from './modules/retrieveData';
import setData from './modules/setData.js';
import createBasket from './modules/createBasket.js';
import Utilities from './modules/utilities.js';

const apiBasket = 'https://getpantry.cloud/apiv1/pantry/f30333b4-125d-4db2-8a42-2c216adec5bc/basket/games'
window.addEventListener('DOMContentLoaded', () => {''
  const items = { "games": [ { "game": "Breath of the Wild", "imageURL": "./media/bow.jpg"}, { "game": "Super Mario 64", "imageURL": "./media/bow.jpg"} ] }
  if(Utilities.CheckJSON(JSON.stringify(items))) {
    // createBasket(apiBasket);
    // setData(apiBasket, items);
    retrieveData(apiBasket);
  }
});