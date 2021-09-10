import showLikes from './showLikes.js';
import retrieveData from './retrieveData.js';

const createLike = async (api, itemId) => {
  const newLike = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${itemId}` }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

export default createLike;
