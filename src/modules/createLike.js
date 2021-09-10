import showLikes from "./showLikes";
import retrieveData from "./retrieveData.js";

const createLike = async (api, itemId) => {
  await fetch(api, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${itemId}` }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(() => retrieveData(api)
      .then((response) => {
        showLikes(response);
      })
    ).catch((error) => {
    throw error;
  });
};

export default createLike;

