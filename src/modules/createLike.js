const createLike = async (api, itemId) => { // eslint-disable-next-line
  const newLike = await fetch(api, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${itemId}` }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};

export default createLike;
