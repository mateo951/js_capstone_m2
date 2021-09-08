const createBasket = async (api) => {
  fetch(api, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).catch((error) => {
    throw error;
  });
};

export default createBasket;