import displayData from "./displayData";
import showLikes from "./showLikes";

const createLike = async (api, itemId) => {
  const response = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `item${itemId}`,
    }),
  }).then((response) => response.json())
    .then((res) => showLikes(res))
    .catch((error) => {
      throw error;
    });

};

export default createLike;